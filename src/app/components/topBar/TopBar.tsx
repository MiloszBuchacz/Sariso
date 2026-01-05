import Button from "../Button/Button";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <div className="main-top-bar-container">
      <div className="top-bar-logo">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </div>
      </div>
      <div className="button-container">
        <NavigationButtons />
      </div>
    </div>
  );
};

export default TopBar;
