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
```

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
