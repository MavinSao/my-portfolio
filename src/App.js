import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Blogs from './pages/Blogs';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <>
      <Navbar>
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
