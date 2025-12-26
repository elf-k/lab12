Elif Karakazan 210408010

# PreferencesApp

PreferencesApp is a mobile application developed using React Native and Expo.  
The project demonstrates core mobile application concepts such as authentication flow, global state management, persistent storage, and user preferences.

---

##  Technologies Used

- React Native
- Expo
- React Navigation (Native Stack)
- Context API
- AsyncStorage
- JavaScript (ES6+)

---

##  Application Features

- User login screen
- Global authentication state management using Context API
- Persistent login state across app restarts
- Logout functionality
- Theme preference (Light / Dark)
- Persistent theme storage
- Stack-based navigation
- Clean and incremental commit history

---

##  Project Structure

```
PreferencesApp
│
├─ screens
│  ├─ LoginScreen.js
│  ├─ HomeScreen.js
│  └─ SettingsScreen.js
│
├─ context
│  └─ AuthContext.js
│
├─ hooks
│  └─ useTheme.js
│
├─ App.js
└─ package.json
```

---

##  Installation and Running

```bash
npm install
npx expo start
```

The application can be run using Expo Go or an emulator.

---

##  Authentication Architecture

- Authentication state is managed globally using the Context API.
- User login data is persisted using AsyncStorage.
- Stored authentication data is cleared on logout.
- Prop drilling is avoided by centralized state management.

---

##  Theme Management

- Theme preference is handled via a custom hook (`useTheme`).
- The selected theme is stored using AsyncStorage.
- Theme preference is restored when the application restarts.

---

##  Testing Checklist

- Login state persists after application restart
- Logout clears stored authentication data
- Theme preference is persistent
- No prop drilling is used
- No console warnings or runtime errors
- Clean and incremental commits for each development part

---

##  Development Stages

- **Part 1:** Project setup and dependency installation
- **Part 2:** Navigation setup
- **Part 3:** Local authentication state with `useState`
- **Part 4:** Global authentication state with Context API
- **Part 5:** Authentication persistence with AsyncStorage
- **Part 6:** Theme preference using a custom hook

---

##  Future Improvements

- Global theme management using Context API
- Improved UI and styling
- Backend-based authentication
- Additional user preference options


