import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './assets/pages/Home';
import Leaderboard from './assets/pages/Leaderboard';
import Teampage from './assets/pages/Teampage';
import Cursor from './components/Cursor';
import FAQpage from './assets/pages/FAQpage';
import './App.css';

const App = () => {
  return (
    <>
      {/* <Cursor /> */}
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
