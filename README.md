To create and provide a dark mode functionality boilerplate on GitHub, follow these steps:

### Step 1: Set Up Your Project

1. **Initialize a New Project:**
   - Create a new directory for your project.
   - Initialize a new Git repository in the directory.
   - Set up a new React project using Create React App or your preferred method.

```bash
npx create-react-app dark-mode-boilerplate
cd dark-mode-boilerplate
git init
```

### Step 2: Add the Dark Mode Functionality

2. **Create the Custom Hook:**
   - Inside the `src` directory, create a new folder named `hooks`.
   - Create a file named `useDarkMode.js` in the `hooks` folder and add the custom hook code.

```javascript
// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkModeEnabled,
} from "darkreader";

const useDarkMode = (
  initialState = false,
  initialSettings = { brightness: 100, contrast: 90, sepia: 10 }
) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(initialState);
  const [brightness, setBrightness] = useState(initialSettings.brightness);
  const [contrast, setContrast] = useState(initialSettings.contrast);
  const [sepia, setSepia] = useState(initialSettings.sepia);

  useEffect(() => {
    const checkDarkMode = async () => {
      try {
        const enabled = await isDarkModeEnabled();
        setIsDarkModeActive(enabled);
      } catch (error) {
        console.error("Error checking dark mode:", error);
      }
    };

    checkDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    try {
      if (!isDarkModeActive) {
        await enableDarkMode({
          brightness: brightness,
          contrast: contrast,
          sepia: sepia,
        });
      } else {
        disableDarkMode();
      }

      setIsDarkModeActive(!isDarkModeActive);
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };

  return {
    isDarkModeActive,
    toggleDarkMode,
    setBrightness,
    setContrast,
    setSepia,
  };
};

export default useDarkMode;
```

3. **Create the Default UI Component:**
   - Inside the `src` directory, create a new folder named `components`.
   - Create a file named `DarkModeToggle.js` in the `components` folder and add the UI component code.

```javascript
// src/components/DarkModeToggle.js
import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = ({ customUI: CustomUI }) => {
  const {
    isDarkModeActive,
    toggleDarkMode,
    setBrightness,
    setContrast,
    setSepia,
  } = useDarkMode();

  const DefaultUI = () => (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkModeActive ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );

  const UIComponent = CustomUI || DefaultUI;

  return (
    <UIComponent
      toggleHandler={toggleDarkMode}
      setBrightness={setBrightness}
      setContrast={setContrast}
      setSepia={setSepia}
    />
  );
};

export default DarkModeToggle;
```

4. **Create a Sample Usage:**
   - Update `src/App.js` to demonstrate the usage of the `DarkModeToggle` component.

```javascript
// src/App.js
import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";

const CustomDarkModeUI = ({ toggleHandler }) => (
  <div>
    <button onClick={toggleHandler}>Toggle Dark Mode</button>
  </div>
);

function App() {
  return (
    <div>
      <h1>My App</h1>
      {/* Using default UI */}
      <DarkModeToggle />

      {/* Using custom UI */}
      <DarkModeToggle customUI={CustomDarkModeUI} />
    </div>
  );
}

export default App;
```

### Step 3: Prepare for GitHub

5. **Add a README:**
   - Create a `README.md` file in the root directory to explain the project, usage, and how to customize it.

````markdown
# Dark Mode Boilerplate

This is a boilerplate project for adding dark mode functionality to your React application using a custom hook and customizable UI component.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dark-mode-boilerplate.git
   cd dark-mode-boilerplate
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Using Default UI

In your component:

```javascript
import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <DarkModeToggle />
    </div>
  );
}

export default App;
```

### Using Custom UI

Pass your custom UI component as a prop to `DarkModeToggle`:

```javascript
import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";

const CustomDarkModeUI = ({ toggleHandler }) => (
  <div>
    <button onClick={toggleHandler}>Toggle Dark Mode</button>
  </div>
);

function App() {
  return (
    <div>
      <h1>My App</h1>
      <DarkModeToggle customUI={CustomDarkModeUI} />
    </div>
  );
}

export default App;
```

## Customization

You can customize the dark mode settings (brightness, contrast, sepia) by modifying the custom hook's parameters in `useDarkMode.js`.

## License

This project is licensed under the MIT License.

````

6. **Commit Your Changes:**
   - Commit all your changes to the repository.

```bash
git add .
git commit -m "Initial commit with dark mode functionality"
````

### Step 4: Push to GitHub

7. **Create a Repository on GitHub:**

   - Go to GitHub and create a new repository with a suitable name, such as `dark-mode-boilerplate`.

8. **Push Your Project:**
   - Follow the instructions provided by GitHub to push your local repository to GitHub.

```bash
git remote add origin https://github.com/meetamjadsaeed/React-Dark-Mode-Boilerplate.git
git branch -M main
git push -u origin main
```
