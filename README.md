# Seed7 Language Support

**Seed7 Language Support** provides syntax highlighting, a custom theme based on Tokyo Night Dark, and integration with Code Runner for Seed7 (`.sd7`) files.

> **Current Version:** 0.0.1

## Features

- **Syntax Highlighting:**  
  Enhanced syntax highlighting for Seed7 code, with support for many—but not yet all—keywords.

- **Custom Theme:**  
  A full theme based on Tokyo Night Dark, with custom token colors specifically for Seed7.

- **Code Runner Integration:**  
  Automatically configures Code Runner to support Seed7 files:

  - Maps `.sd7` files to run with a command that compiles the code and then runs the resulting executable.
  - Sets additional Code Runner options:
    - `clearPreviousOutput: true`
    - `saveAllFilesBeforeRun: true`
    - `runInTerminal: true`

- **File Associations:**  
  Associates files with the `.sd7` extension to the Seed7 language.

- **Cleanup Command:**  
  Provides a command to remove Seed7-specific settings from the user’s configuration if needed.

## Disclaimer

- **Compilation vs. Interpretation:**  
  The default Code Runner configuration provided by this extension compiles your Seed7 code (using the command `s7c`) and then runs the resulting executable. It does not run the code via an interpreter.

- **Customization:**  
  You can change this behavior by editing your `settings.json`. For example, if you prefer to run the code without launching the executable, you can replace `s7c` with `s7` in the configuration and remove the second command that executes the generated executable.

- **Compiler Download:**  
  Please note that you must download the Seed7 compiler separately from the official [Seed7 website](http://seed7.sourceforge.net/) as it is not bundled with this extension.

- **Code Runner Settings Display:**  
  Although this extension only adds a custom executor for `.sd7` files, the Code Runner settings in the VS Code settings editor will display the complete merged configuration (including the default mappings for other file types). This is expected behavior and does not mean that the extension is overwriting other settings.

- **Development Status:**  
  This extension is still in development. Not all Seed7 keywords are supported yet, and improvements are actively being worked on.

## Version Details

- **Current Version:** 0.0.1  
  This version introduces basic syntax highlighting, theme support, and Code Runner integration for Seed7.
- Future versions will add additional keyword support and improvements.  
  Check the [CHANGELOG](CHANGELOG.md) for detailed release notes.

## Installation

1. Install the extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).
2. If you haven't already, install [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) (this extension automatically prompts to install it as a dependency).

## Usage

- **Editing Seed7 Files:**  
  Open any file with the `.sd7` extension to see enhanced syntax highlighting and the custom theme if selected.

- **Selecting the Theme:**  
  Press `Ctrl+K Ctrl+T` (or use **Preferences: Color Theme**) and select **Seed7 Dark** to use the custom theme.

- **Running Code:**  
  Code Runner is configured to compile and then execute Seed7 files using your custom command. Use Code Runner's commands to run your code.

## Commands

- **Seed7: Remove Settings**  
  To remove the Seed7-specific Code Runner settings and file associations, open the Command Palette (`Ctrl+Shift+P`) and run:

  **Seed7: Remove Settings**

  This command cleans up any custom settings added by the extension.

## Troubleshooting

- **Settings Not Applied?**

  - Ensure that your file is recognized as a Seed7 file (check the language mode in the bottom-right corner).
  - Make sure Code Runner is installed.
  - Use **Developer: Inspect Editor Tokens and Scopes** to verify that the Seed7 grammar is applied.

- **Need to Remove Custom Settings:**  
  Use the **Seed7: Remove Settings** command if you uninstall the extension and want to clean up your user settings.

## Contributing

Contributions and feedback are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/yourusername/seed7-language-support).

## License

[MIT License](LICENSE)
