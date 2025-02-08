import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hidden from "./pages/Hidden";

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
