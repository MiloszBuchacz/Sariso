import Background from "./components/Background/Background";
import Button from "./components/Button/Button";
import Drower from "./components/Drower/Drower";
import TopBar from "./components/topBar/TopBar";
import HomePage from "./pages/homePage/Page";

import "./components/topBar/TopBar.css";

export default function Home() {
  return (
    <>
      <Background />
      <TopBar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <HomePage />
      </main>
      <Drower>
        <Button className="custom-button-styles" url="/home">
          home
        </Button>
        <Button className="custom-button-styles" url="/contact">
          contact
        </Button>
        <Button className="custom-button-styles" url="/aboutUs">
          about us
        </Button>
        <Button className="custom-button-styles" url="/projects">
          our work
        </Button>
      </Drower>
    </>
  );
}
