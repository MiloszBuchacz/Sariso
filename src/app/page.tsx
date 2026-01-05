import Background from "./components/Background/Background";
import TopBar from "./components/topBar/TopBar";
import HomePage from "./pages/homePage/Page";

export default function Home() {
  return (
    <>
      <TopBar />
      <HomePage />
      {/* <div style={{ zIndex: "1" }}>
        <Background />
      </div> */}
    </>
  );
}
