
import type { ToggleProps } from "../../types/type";
import "./ToggleButton.css";

const ToggleButton = ({ isDarkMode, onToggleDarkMode }: ToggleProps) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => onToggleDarkMode(!isDarkMode)}
      />
      <span className="slider"></span>
      <span className="text">{isDarkMode ? "Dark" : "Light"}</span>
    </label>
  );
};

export default ToggleButton;
