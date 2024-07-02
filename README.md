# Dark Mode Boilerplate

This is a boilerplate project for adding dark mode functionality to your React application using a custom hook and customizable UI component.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meetamjadsaeed/React-Dark-Mode-Boilerplate.git
   cd React-Dark-Mode-Boilerplate
   ```

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
