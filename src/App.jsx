import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teampage from './pages/Teampage';
import './App.css';
import FAQpage from './pages/FAQpage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/faqs" element={<FAQpage />} />
      </Routes>
    </>
  );
};

export default App;
