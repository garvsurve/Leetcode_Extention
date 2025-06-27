# 🧠 LeetCode Helper - Chrome Extension

[![Version](https://img.shields.io/badge/version-1.1-blue)](https://github.com/your-username/leetcode-helper)
[![Chrome Extension](https://img.shields.io/badge/chrome-extension-green)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

A lightweight and user-friendly Chrome extension to assist with solving LeetCode problems efficiently.  
Mark your solution approach!

---

## 🚀 Features

- ✅ **Mark Approach Type**: Brute Force / Optimal / Needs Optimization
- 📌 Fixed, minimal widget on the LeetCode page
- 💾 Saves selected approach using browser storage
- 🧩 Easy-to-use popup UI from the Chrome toolbar

---

## 🖼️ Demo
  
> Example:
> ![screenshot](<img width="878" alt="Screenshot 2025-06-27 at 2 06 15 PM" src="https://github.com/user-attachments/assets/04a6d087-d9b7-4a19-b0b3-7c8e97a7553c" />
)
> <img width="878" alt="Screenshot 2025-06-27 at 2 06 09 PM" src="https://github.com/user-attachments/assets/c5de635e-53b2-4d15-b44f-f47dd46caeb4" />


---

## 📂 Project Structure

| File | Purpose |
|------|---------|
| `popup.html` | UI for the extension popup |
| `popup.js` | Handles UI logic and storage |
| `styles.css` | Styling for both popup and widget |
| `content.js` | Injects widget into LeetCode |
| `manifest.json` | Extension metadata and permissions |
| `letter-l.png` | Extension icon/logo |

---

## 🧑‍💻 How to Install

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/leetcode-helper.git
   cd leetcode-helper
2. Open Chrome and go to:
   chrome://extensions/
3. Enable Developer Mode (top-right)
4. Click Load Unpacked and select this project folder
5. The extension will now appear in your toolbar. Go to LeetCode and start using it!
