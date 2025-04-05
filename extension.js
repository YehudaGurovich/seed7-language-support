const vscode = require('vscode');

let promptCount = 0;
const MAX_PROMPTS = 3;

function activate(context) {
  // Code Runner support prompt
  vscode.window.showInformationMessage(
    "Would you like to update your settings for Seed7 Code Runner support?",
    "Yes",
    "No"
  ).then(answer => {
    if (answer === "Yes") {
      updateUserSettings();
    }
  });

  // Register cleanup command
  const removeSettingsCommand = vscode.commands.registerCommand('seed7.removeSettings', async () => {
    const config = vscode.workspace.getConfiguration('code-runner');
    const executorMap = JSON.parse(JSON.stringify(config.get('executorMapByFileExtension') || {}));

    if (executorMap[".sd7"]) {
      delete executorMap[".sd7"];
      await config.update('executorMapByFileExtension', executorMap, vscode.ConfigurationTarget.Global);
    }

    vscode.window.showInformationMessage("Seed7 settings have been removed from your user settings.");
  });

  context.subscriptions.push(removeSettingsCommand);

  // Info about cleanup
  vscode.window.showInformationMessage(
    'If you uninstall the Seed7 Language Support extension, run "Seed7: Remove Settings" from the Command Palette to remove its settings.'
  );

  // 🔍 Watch for .sd7 and .s7i file creation
  const watcher = vscode.workspace.createFileSystemWatcher('**/*.{sd7,s7i}');

  watcher.onDidCreate(async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) return;

    const rootUri = workspaceFolders[0].uri;
    const vscodeDirUri = vscode.Uri.joinPath(rootUri, '.vscode');
    const settingsUri = vscode.Uri.joinPath(vscodeDirUri, 'settings.json');

    // Only prompt if the .vscode directory is missing
    try {
      await vscode.workspace.fs.stat(vscodeDirUri);
      return; // .vscode/ exists — do nothing
    } catch (error) {
      if (promptCount >= MAX_PROMPTS) return;

      promptCount++;

      vscode.window.showInformationMessage(
        'Enable snippet suggestions at the top for Seed7 files?',
        'Yes', 'No'
      ).then(selection => {
        if (selection === 'Yes') {
          const settingsContent = Buffer.from(JSON.stringify({
            "editor.snippetSuggestions": "top"
          }, null, 2));

          vscode.workspace.fs.createDirectory(vscodeDirUri).then(() => {
            vscode.workspace.fs.writeFile(settingsUri, settingsContent)
              .then(() => {
                vscode.window.showInformationMessage('Seed7 workspace settings created.');
              })
              .catch(err => {
                vscode.window.showErrorMessage('Failed to write settings.json: ' + err.message);
              });
          });
        }
      });
    }
  });

  context.subscriptions.push(watcher);
}

function updateUserSettings() {
  const codeRunnerConfig = vscode.workspace.getConfiguration('code-runner');

  codeRunnerConfig.update('clearPreviousOutput', true, vscode.ConfigurationTarget.Global);
  codeRunnerConfig.update('saveAllFilesBeforeRun', true, vscode.ConfigurationTarget.Global);
  codeRunnerConfig.update('runInTerminal', true, vscode.ConfigurationTarget.Global);

  const executorMap = JSON.parse(JSON.stringify(codeRunnerConfig.get('executorMapByFileExtension') || {}));
  executorMap[".sd7"] = "s7c $fileName; & \".\\$([System.IO.Path]::GetFileNameWithoutExtension(\"$fileName\")).exe\"";
  codeRunnerConfig.update('executorMapByFileExtension', executorMap, vscode.ConfigurationTarget.Global)
    .then(() => {
      vscode.window.showInformationMessage("Seed7 Code Runner settings have been added to your settings.");
    }, (error) => {
      vscode.window.showErrorMessage("Error updating code-runner settings: " + error);
    });

  const filesConfig = vscode.workspace.getConfiguration('files');
  const fileAssociations = JSON.parse(JSON.stringify(filesConfig.get('associations') || {}));
  fileAssociations["*.sd7"] = "Seed7";
  fileAssociations["*.s7i"] = "Seed7";
  filesConfig.update('associations', fileAssociations, vscode.ConfigurationTarget.Global)
    .then(() => {
      vscode.window.showInformationMessage("File associations for Seed7 have been added.");
    }, (error) => {
      vscode.window.showErrorMessage("Error updating file associations: " + error);
    });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
