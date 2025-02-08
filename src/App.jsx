import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hidden from "./pages/Hidden";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hidden" element={<Hidden />} />
      </Routes>
    </>
  );
}

export default App;