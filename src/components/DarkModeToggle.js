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
    <div class="darkmode-wrapper">
      <div class="darkmode">
        <input
          type="checkbox"
          class="dark-checkbox"
          id="dark-checkbox"
          onClick={toggleDarkMode}
        />
        <label for="dark-checkbox" class="dark-label">
          <i class="fas fa-moon darkmode-moon"></i>
          <i class="fas fa-sun darkmode-sun"></i>
          <div class="dark-mode-ball"></div>
        </label>
      </div>
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
