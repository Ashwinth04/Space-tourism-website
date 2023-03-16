import Bar from "./Components/Bar/Bar";
import Crew from "./Components/Crew/Crew";
import Destination from "./Components/Destination/Destination";
import Home from "./Components/Home/Home";
import Technology from "./Components/Technology/Technology";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="destination" element={<Destination/>}></Route>
      <Route path="crew" element={<Crew/>}></Route>
      <Route path="technology" element={<Technology/>}></Route>
    </Routes>
  );
}

export default App;
