import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Matches from "./Components/Matches";
import Gameplay from "./Components/Gameplay";
import Leaderboard from "./Components/Leaderboard";
import Howtoply from "./Components/Static/Howtoplay";
import Prizes from "./Components/Static/Prizes";
import Rules from "./Components/Static/Rules";
import Terms from "./Components/Static/Terms";
import ComingSoon from "./Components/Static/ComingSoon";
import BlankPage from "./Components/Static/BlankPage";
import Holding from "./Components/Static/Holding";

// import ComingSoon from "./Components/Static/ComingSoon";
function App() {
  return (
    <>
     {/* si-firsttimeuser */}
      <div className="si-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/how-to-play" element={<Howtoply/>} />
            <Route path="/holding" element={<Holding/>} />
            <Route path="/prizes" element={<Prizes />} /> 
            <Route path="/rules" element={<Rules />} /> 
            <Route path="/terms" element={<Terms />} /> 
            <Route path="/ComingSoon" element={<ComingSoon/>} /> 
            
            <Route path="/BlankPage" element={<BlankPage/>} /> 
            
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
