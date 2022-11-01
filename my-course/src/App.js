// import './App.css';
import './app-sas.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginFunction from './pages/LoginFunction';
import Error from './pages/Error';
import MyCourse from './pages/MyCourse';
import DetailCourse from './pages/DetailCourse';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginFunction}/>
        <Route exact path="/mycourse/:id" component={MyCourse} />
        <Route exact path="/detailcourse/:course_id/:user_id" component={DetailCourse} />
        <Route exact path='*' component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
