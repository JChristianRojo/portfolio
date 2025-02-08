import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hidden from "./pages/hidden";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hidden" element={<Hidden />} />
      </Routes>
    </>
  );
}

export default App;
