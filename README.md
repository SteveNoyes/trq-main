# Prompt Coach Browser Extension

Prompt Coach is a browser extension that helps users build better AI prompts by guiding them through a structured process: Goal, Context, Source, and Expectations. It provides built-in examples, allows saving custom prompts locally, and offers tips for effective prompting.

## Features

- **Structured Prompt Building**: Fill in Goal, Context, Source, and Expectations to create clear, effective prompts.
- **Built-in Examples**: Choose from pre-built prompt templates for common tasks like summarizing meetings, drafting emails, or brainstorming ideas.
- **Save Custom Prompts**: Save your own prompt templates for reuse, stored locally in your browser.
- **Delete Prompts**: Remove saved custom prompts or built-in examples as needed.
- **Prompt Preview**: See a live preview of your prompt as you type.
- **Copy to Clipboard**: Easily copy the final prompt to use in AI tools.
- **Prompting Tips**: Quick reminders for best practices.

## Installation

### For Chrome (or Chromium-based browsers like Edge)

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button.
5. Select the folder containing the extension files (e.g., the folder where you cloned/downloaded this repository).
6. The extension should now appear in your extensions list and in the browser toolbar.

### For Firefox

1. Download or clone this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click "This Firefox" in the left sidebar.
4. Click "Load Temporary Add-on".
5. Select the `manifest.json` file from the extension folder.
6. The extension will be loaded temporarily (resets on browser restart).

Note: This extension uses Manifest V3 for Chrome and WebExtensions for Firefox.

## Usage

1. Click the Prompt Coach icon in your browser toolbar to open the popup.
2. Select a built-in example from the dropdown or start fresh.
3. Fill in the form fields:
   - **Goal**: What response do you want from the AI?
   - **Context**: Background information and who is involved.
   - **Source**: Data or examples the AI should use.
   - **Expectations**: How the AI should respond (tone, length, format).
4. View the live preview of your prompt.
5. Click "Copy to clipboard" to copy the prompt.
6. Optionally, save your prompt as a template by clicking "Save prompt" and giving it a name.
7. To delete a prompt, select it from the dropdown and click "Delete prompt" (you'll be asked to confirm).

Saved prompts are stored locally in your browser and will persist across sessions.

## Files

- `manifest.json`: Extension manifest file.
- `index.html`: The popup interface.
- `style.css`: Styles for the popup.
- `script.js`: JavaScript logic for the app.

## Privacy

All data (saved prompts) is stored locally in your browser's local storage. No data is sent to external servers.

## Contributing

Feel free to submit issues or pull requests to improve the extension.

## License

This project is open source. See LICENSE file if available.