# Seed7 Language Support

**Seed7 Language Support** provides syntax highlighting for Seed7 code, a custom theme, and integration with Code Runner for running Seed7 files in Visual Studio Code, including support for the `.sd7` and `.s7i` file extensions.

> **Current Version:** 0.1.1

## Features

- **Syntax Highlighting:**  
  Enhanced syntax highlighting for Seed7 code, with support for many keywords.

- **Snippets:**  
  Basic Seed7 code snippets are included to speed up your workflow.
  (Make sure "editor.snippetSuggestions": "top" is set for the best experience - see below.)

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
  Associates files with the `.sd7` or `.s7i` extension with the Seed7 language mode.
  This allows for proper syntax highlighting and language features.

- **Smart Workspace Setup (Optional):**
  When you create a `.sd7` or `.s7i` file, this extension will automatically detect if your project lacks a `.vscode/` folder, and offer to create a basic `.vscode/settings.json` file for you.

  If accepted, the file will include:

  ```json
  {
    "editor.snippetSuggestions": "top"
  }
  ```

  This ensures that Seed7 snippets appear at the top of VS Code’s IntelliSense suggestions for a smoother coding experience.

  > :warning: If you decline, we’ll ask again only a few more times, just in case you change your mind.
  > :exclamation: This change only affects the current workspace, not your global VS Code settings.

- **Cleanup Command:**  
  Provides a command to remove Seed7-specific settings from the user’s configuration if needed.

## Available Snippets

- **`main`**: Inserts a basic Seed7 program structure with a `main` function.
- **`func`**: Inserts a function definition template.
- **`proc`**: Inserts a procedure definition template.
- **`if`**: Inserts an `if` statement template.
- **`elseif`**: Inserts an `if-elsif-else` statement template.
- **`ifelse`**: Inserts an `if-else` statement template.
- **`case`**: Inserts a `case` statement template.
- **`while`**: Inserts a `while` loop template.
- **`for`**: Inserts a `for` loop template.
- **`const`**: Inserts a constant variable declaration template.
- **`var`**: Inserts a variable declaration template.
- **`wln`**: Inserts a `writeln` statement template for outputting text to the console.
- **`rln`**: Inserts a `readln` statement template for reading input from the console.
- **`array`**: Inserts a default array declaration template.
- **`arr0`**: Inserts a zero-based array declaration template.

## Disclaimer

- **Compilation vs. Interpretation:**  
  The default Code Runner configuration provided by this extension compiles your Seed7 code (using the command `s7c`) and then runs the resulting executable. It does not run the code via an interpreter.

- **Customization:**  
  You can change this behavior by editing your `settings.json`. For example, if you prefer to run the code without launching the executable, you can replace `s7c` with `s7` in the configuration and remove the second command that executes the generated executable.

- **Compiler Download:**  
  Please note that you must download the Seed7 compiler separately from the official [Seed7 website](http://seed7.sourceforge.net/) as it is not bundled with this extension.

- **Code Runner Settings Display:**  
  This extension only adds a custom executor for `.sd7` files and file associations for both `.sd7` and `.s7i` files. The Code Runner settings panel in the general `settings.json` will show a merged view of all settings, including defaults for other languages. This is expected behavior.

- **Development Status:**  
  This extension is still in development. Not all Seed7 keywords are supported yet, and improvements are actively being worked on.

## Version Details

- **Current Version:** 0.0.2
  This version adds more keywords to the syntax highlighting, support for the `.s7i` file extension, and basic snippet support.  
  Check the [CHANGELOG](CHANGELOG.md) for detailed release notes.

## Installation

1. Install the extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).
2. If you haven't already, install [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) (this extension automatically prompts to install it as a dependency).

## Usage

- **Editing Seed7 Files:**  
  Open any file with the `.sd7` or `.s7i` extension to start using the Seed7 syntax highlighting, snippets, and the custom theme if selected.

- **Selecting the Theme:**  
  Press `Ctrl+K Ctrl+T` (or use **Preferences: Color Theme**) and select **Seed7 Dark** to use the custom theme.

- **Running Code:**  
  Code Runner is configured to compile and then execute Seed7 files using your custom command. Use Code Runner's run button or the shortcut `Ctrl+Alt+N` to run your Seed7 code.
  You can still run the code using the terminal through the command `s7c` or `s7` followed by the file name.

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

Contributions and feedback are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/YehudaGurovich/seed7-language-support).

## License

[MIT License](LICENSE.txt)
