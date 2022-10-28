import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import Error from './pages/Error';
// import MyCourse from './pages/MyCourse';
import DetailCourse from './pages/DetailCourse';
import MyCourseClass from './pages/MyCourseClass';


function App() {
  return (
    <Router>
      {/* outside this Routes, (nav & footer) will stay, page wont changing. only inside Routes could change */}
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path="/mycourse/:id" component={MyCourseClass} />
        <Route path="/detailcourse/:alldetailcourse" element={<DetailCourse/>} />
        {/* <Route path='/profile/:username' element={<Profile/>}></Route> */}
        <Route path='*' element={<Error/>}/>
      </Switch>
      <footer> <p>Kenza Mahardika @ 2022</p></footer>
    </Router>
  );
}

export default App;
