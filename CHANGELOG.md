# Change Log

All notable changes to the "Seed7" extension will be documented in this file.

## [Unreleased - version 0.0.1] - 2025-03-27

### Added

- Initial release
- Basic syntax highlighting triggered by the file extension `.sd7`
- Just a few keywords are highlighted for testing purposes

## [0.0.2] - 2025-10-04

### Added

- Added support for the `s7i` file extension
- Added basic snippet support for `sd7` and `s7i` files
- Added more keywords to the syntax highlighting
- Added support for the `s7i` file types in the settings.json file
- Added deletion functionality to remove also `s7i` files from the settings.json file
- Added the pop up when creating a `sd7` or `s7i` file to ask if the user wants to prioritize snippets at the top of the suggestion list. It will create the .vscode folder and the settings.json file if it doesn't exist.
- `README.md` updated with the new features and instructions for the user

### Fixed

- Fixed the deletion functionality to remove data from settings.json correctly

## [0.1.0] - 2025-24-04

### Added

- Added snippets for array declarations.
- Added snippet for `proc` keyword.
- Added syntax highlighting for datatype for array declaration.

### Changed

- Changed snippet keyword from `write` to `wln` to avoid confusion with the `write` function in Seed7.
- Changed the snippet keyword from `read` to `rln` to avoid confusion with the `read` function in Seed7.
- Changed the snippet for `func` to not have the () brackets in the snippet by default, since not all functions have arguments. This way, the user can add them if needed.
- Changed the snippet for `func` to have commented `local` block by default, since not all functions have local variables. This way, the user can uncomment it if needed.
- Changed the snippet for `main` to point first to the newly commented `local` block, since not all main functions have local variables. And then point to the begin block. It was the other way around before. The user can uncomment the `local` block if needed.
- Changed many snippets to end correctly and not outside of the snippet itself.
