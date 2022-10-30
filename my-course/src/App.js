import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import LoginFunction from './pages/LoginFunction';
import Error from './pages/Error';
// import MyCourse from './pages/MyCourse';
// import DetailCourse from './pages/DetailCourse';
import MyCourseClass from './pages/MyCourseClass';
import DetailCourseClass from './pages/DetailCourseClass';


function App() {
  return (
    <Router>
      {/* outside this Routes, (nav & footer) will stay, page wont changing. only inside Routes could change */}
      <Switch>
        <Route exact path='/' component={LoginFunction}/>
        <Route exact path="/mycourse/:id" component={MyCourseClass} />
        <Route exact path="/detailcourse/:course_id/:user_id" component={DetailCourseClass} />
        {/* <Route path='/profile/:username' element={<Profile/>}></Route> */}
        <Route path='*' element={<Error/>}/>
      </Switch>
      <footer> <p>Kenza Mahardika @ 2022</p></footer>
    </Router>
  );
}

export default App;
