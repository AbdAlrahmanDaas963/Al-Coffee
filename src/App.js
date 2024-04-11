import Aboutme from "./components/Aboutme";
import Landingpage from "./components/Landingpage";
import useScreenSize from "../utils/useScreenSize";


function App() {
  const { isSmall, isMedium, isLarge } = useScreenSize();

  return (
    <div className="App">
      <Landingpage />
      <Aboutme />
    </div>
  );
}

export default App;
