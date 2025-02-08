import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hidden from "./pages/hidden";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<Hidden />} />
      </Routes>
    </>
  );
}

export default App;

export default App
