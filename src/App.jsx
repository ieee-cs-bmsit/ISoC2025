import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Teampage from './pages/Teampage';
import Cursor from './components/Cursor';
import FAQpage from './pages/FAQpage';
import './App.css';

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/team" element={<Teampage />} />
        <Route path='/faqs' element={<FAQpage />} />
      </Routes>
      </main>
      
    </>
  );
};

export default App;
