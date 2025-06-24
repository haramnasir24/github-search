import "./ToggleButton.css";

type ToggleButtonProps = {
  isDarkMode: boolean;
  onToggleDarkMode: (enabled: boolean) => void;
};

const ToggleButton = ({ isDarkMode, onToggleDarkMode }: ToggleButtonProps) => {
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
