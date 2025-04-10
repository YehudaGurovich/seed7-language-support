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
