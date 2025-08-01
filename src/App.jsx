import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Hidden from './pages/hidden';
import GirlfriendsDay from './pages/girlfriends-day';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hidden" element={<Hidden />} />
        <Route path="/girlfriends-day" element={<GirlfriendsDay />} />
      </Routes>
    </>
  );
}

export default App;
