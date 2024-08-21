import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
          <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/listing/:id" element={<Listing/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/profile" element={<Profile/>} />
          </Routes>
    </Router>
  );
}

export default App;