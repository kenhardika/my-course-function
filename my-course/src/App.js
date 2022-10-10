import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      {/* outside this Routes, (nav & footer) will stay, page wont changing. only inside Routes could change */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <div className="footer"> This is footer dont mind me </div>

    </Router>
  );
}

export default App;
