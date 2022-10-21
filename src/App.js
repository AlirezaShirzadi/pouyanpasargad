import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";

import { Route, Routes } from "react-router-dom";

//import Routes
import Home from "./Routes/Home";
import Carpet from "./Routes/Carpet";
import HandyCraft from './Routes/HandyCraft'
import Nuts from './Routes/Nuts'
import Herbal from './Routes/Herbal'
import Instruction from './Routes/Instruction'
import Mineral from './Routes/Mineral'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* routes must add */}
        <Route path="/carpet" element={<Carpet />} />
        <Route path="/handy-craft" element={<HandyCraft />} />
        <Route path="/nuts" element={<Nuts />} />
        <Route path="/herbal" element={<Herbal />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/mineral" element={<Mineral />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
