# TAMO Autocomplete (Auto Login)

A simple Chrome Extension to automatically log into the TAMO dienynas portal.

## 🔐 Security Note
This extension uses `chrome.storage.local` to store your credentials locally on your machine. They are never sent to any server other than the TAMO login portal.

## 🚀 How to Install
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing these files.

## 🛠 Usage
1. Click the extension icon in your browser toolbar.
2. Enter your TAMO username and password.
3. Click **Save Settings**.
4. The extension will now automatically fill and submit the login form when you visit `dienynas.tamo.lt`.

## 📄 License
MIT
