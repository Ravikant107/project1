import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Profile from './pages/Profile';
import PlacePage from './pages/PlacePage';
import Footer from './components/Footer';
import AddPlace from './pages/AddPlace';
import { PlacesProvider } from './contexts/PlacesContext';


function App() {
  return (
    <PlacesProvider>
    <Router>
          <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/listing/:id" element={<Listing/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/profile" element={<AddPlace/>} />
          <Route path="/place/:id" element={<PlacePage />} />
          </Routes>
    </Router></PlacesProvider>
  );
}

export default App;