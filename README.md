# 🎤 My App

This is a React Native app built with [Expo](https://expo.dev/) and [expo-router](https://expo.github.io/router/docs/). It features live voice transcription using the device microphone.

## ✨ Features

- 🎙️ **Live Transcription:** Tap the microphone to start or stop listening. Spoken words are transcribed in real time.
- 🗂️ **Tabbed Navigation:** Home and About screens, with a modern tab bar.
- 🛣️ **Expo Router:** File-based routing for easy navigation and screen management.
- 🟦 **TypeScript:** Strict typing for safer code.
- 🪝 **Custom Hooks:** Includes a [`useVoice`](hooks/useVoice.tsx) hook for voice recognition logic.

## 🚀 Getting Started

### 📋 Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### 🛠️ Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. 📱 Follow the Expo CLI instructions to open the app on your device or emulator.

---

## 🗂️ Project Structure

```
my-app/
  app/                # App entry and screens (file-based routing)
    (tabs)/           # Tabbed screens: Home, About
    _layout.tsx       # Root stack layout
    +not-found.tsx    # 404 screen
  hooks/              # Custom React hooks (e.g., useVoice)
  assets/             # Images and fonts
  .expo/              # Expo generated files
  .vscode/            # VSCode settings
  ...
```

## 🗣️ Voice Recognition

Voice recognition is handled by [`useVoice`](hooks/useVoice.tsx), which uses [`@react-native-voice/voice`](https://github.com/react-native-voice/voice). Make sure to grant microphone and speech recognition permissions on your device.

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [expo-router Documentation](https://expo.github.io/router/docs/)
- [React Native Voice](https://github.com/react-native-voice/voice)
