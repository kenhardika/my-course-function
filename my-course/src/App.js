import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Error from './pages/Error';
import MyCourse from './pages/MyCourse';


function App() {
  return (
    <Router>
      {/* outside this Routes, (nav & footer) will stay, page wont changing. only inside Routes could change */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/mycourse/:allcourse" element={<MyCourse/>} />
        {/* <Route path='/profile/:username' element={<Profile/>}></Route> */}
        <Route path='*' element={<Error/>}/>
      </Routes>
      <footer> <p>Kenza Mahardika @ 2022</p></footer>
    </Router>
  );
}

export default App;
