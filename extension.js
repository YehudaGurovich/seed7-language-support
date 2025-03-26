const vscode = require('vscode');

function activate(context) {
  // Prompt the user whether to update settings for Seed7 Code Runner support.
  vscode.window.showInformationMessage(
    "Would you like to update your settings for Seed7 Code Runner support?",
    "Yes",
    "No"
  ).then(answer => {
    if (answer === "Yes") {
      updateUserSettings();
    }
  });

  // Register a command to remove only the .sd7 setting from code-runner.executorMapByFileExtension.
  let removeSettingsCommand = vscode.commands.registerCommand('seed7.removeSettings', async () => {
    const config = vscode.workspace.getConfiguration('code-runner');
    // Deep clone the current executor map to avoid modifying a non-extensible proxy.
    const executorMap = JSON.parse(JSON.stringify(config.get('executorMapByFileExtension') || {}));

    // Remove only the .sd7 entry.
    if (executorMap[".sd7"]) {
      delete executorMap[".sd7"];
      await config.update('executorMapByFileExtension', executorMap, vscode.ConfigurationTarget.Global);
    }

    vscode.window.showInformationMessage("Seed7 settings have been removed from your user settings.");
  });

  context.subscriptions.push(removeSettingsCommand);

  // Inform the user about the cleanup command.
  vscode.window.showInformationMessage(
    'If you uninstall the Seed7 Language Support extension, run "Seed7: Remove Settings" from the Command Palette to remove its settings.'
  );
}

function updateUserSettings() {
  // Access the Code Runner configuration.
  const config = vscode.workspace.getConfiguration('code-runner');
  
  // Deep clone the current executor map.
  const executorMap = JSON.parse(JSON.stringify(config.get('executorMapByFileExtension') || {}));

  // Update or add only the .sd7 entry while preserving all other keys.
  executorMap[".sd7"] = "s7c $fileName; & \".\\$([System.IO.Path]::GetFileNameWithoutExtension(\"$fileName\")).exe\"";

  // Write the updated executor map back to the global settings.
  config.update('executorMapByFileExtension', executorMap, vscode.ConfigurationTarget.Global)
    .then(() => {
      vscode.window.showInformationMessage("Seed7 Code Runner settings have been added to your settings.");
    }, (error) => {
      vscode.window.showErrorMessage("Error updating settings: " + error);
    });
}

function deactivate() {
  // No automatic cleanup on deactivation.
}

module.exports = {
  activate,
  deactivate
};
