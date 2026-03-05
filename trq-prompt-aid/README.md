# Prompt Coach Browser Extension

Prompt Coach is a browser extension that helps users build better AI prompts by guiding them through a structured process: Goal, Context, Source, and Expectations. It provides built-in examples, allows saving custom prompts locally, and features a modern, polished user interface with intuitive interactions.

## Features

- **Structured Prompt Building**: Fill in Goal, Context, Source, and Expectations to create clear, effective prompts.
- **Built-in Examples**: Choose from 13 pre-built prompt templates for common tasks like summarizing meetings, drafting emails, brainstorming ideas, and more.
- **Save Custom Prompts**: Save your own prompt templates for reuse, stored locally in your browser.
- **Delete Prompts**: Remove saved custom prompts with a confirmation modal dialog to prevent accidental deletion.
- **Prompt Preview**: See a live preview of your prompt as you type.
- **Copy to Clipboard**: Easily copy the final prompt to use in AI tools.
- **Toast Notifications**: Get non-intrusive feedback for all actions (save, delete, copy) with auto-dismissing notifications.
- **Modal Dialogs**: Critical actions like deleting prompts are confirmed via a professional modal dialog, not jarring browser popups.
- **Inline Save Form**: When saving a prompt, an inline form appears with a text input field and overwrite warning, keeping you in context.
- **Design System Integration**: Modern UI styled with a comprehensive design system featuring a blue, teal, and beige color palette.
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
2. Select a built-in example from the dropdown menu or start with a blank form.
3. Fill in the form fields:
   - **Goal**: What response do you want from the AI?
   - **Context**: Background information and who is involved.
   - **Source**: Data or examples the AI should use.
   - **Expectations**: How the AI should respond (tone, length, format).
4. View the live preview of your prompt as you type.
5. **Copy to Clipboard**: Click the button to copy your prompt. You'll see a success toast notification confirming the action.
6. **Save Prompt**: Click "Save prompt" to open an inline form. Enter a name for your prompt:
   - If the name already exists, a warning message will appear asking if you want to overwrite.
   - Click "Save" to confirm or "Cancel" to dismiss.
   - A success notification will appear once saved.
7. **Delete Prompt**: Select a saved or built-in prompt from the dropdown and click "Delete prompt":
   - A confirmation modal will appear asking you to confirm the deletion.
   - Click "Delete" to remove or "Cancel" to keep the prompt.
   - A success notification confirms the deletion.

All saved prompts are stored locally in your browser's local storage and will persist across sessions.

## User Experience

### Toast Notifications
All user actions (copying, saving, deleting) provide non-intrusive feedback through toast notifications that appear in the bottom-right corner and auto-dismiss after 3 seconds. Notifications are color-coded for quick recognition:
- **Green** for successful actions (save, copy, delete)
- **Orange** for warnings
- **Red** for errors

### Modal Dialogs
Destructive actions like deleting prompts use a professional modal dialog with a semi-transparent overlay. This ensures users intentionally confirm the action before it's performed.

### Inline Forms
Instead of browser popups, the save feature uses an inline form that expands within the interface, keeping users in context while naming and saving their prompts. An overwrite warning alerts users if a prompt name already exists.

### Design System
The extension uses a cohesive design system with:
- **Color Palette**: Primary blue (#006895), teal accents (#8ec1b8), beige backgrounds (#dfdcd3), with semantic error/success colors
- **Typography**: Inter font family with carefully scaled heading and body text sizes
- **Spacing & Layout**: Consistent padding, margins, and component sizing based on a modular scale
- **Animations**: Smooth transitions and slide animations for toasts and modals

## Files

- `manifest.json`: Extension manifest file.
- `index.html`: The popup interface with modal and toast containers.
- `style.css`: Styles for the popup, including design system colors and component styling.
- `script.js`: JavaScript logic for the app, including toast notifications, modal management, and form handling.
- `Style-Guide/`: Comprehensive design system with color variables, typography scale, and component definitions.

## Privacy

All data (saved prompts) is stored locally in your browser's local storage. No data is sent to external servers.

## Contributing

Feel free to submit issues or pull requests to improve the extension.

## License

This project is open source. See LICENSE file if available.