import Background from "./components/Background/Background";
import HomeDrower from "./pages/homePage/HomeDrower";
import HomePage from "./pages/homePage/Page";
import TopBar from "./components/topBar/TopBar";

import "./components/topBar/TopBar.css";

export default function Home() {
  return (
    <>
      <Background />
      <TopBar />
      <HomePage />
      <HomeDrower />
    </>
  );
}
