import React, { Component } from 'react';
import fetchCourses from '../utils/fetchCourseCards';
import Header from './Header';
// import { Card } from '../components/Card';
import CardClass from '../components/CardClass';

// import PropTypes from 'prop-types';

class MyCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {dataCourse:[]};
        this.navigateToDetailCourse = this.navigateToDetailCourse.bind(this);
    }

    // componentWillMount() {
    // }
    changeState(data){
        this.setState({
           dataCourse: data
        })
    }

    navigateToDetailCourse(e, courseid, userid){
        e.preventDefault();
        // console.log(this.props);
        const {history} = this.props;
        // console.log(courseid);
        // console.log(userid);
        // console.log(history)
        history.push(`/detailcourse/${courseid}/${userid}`)
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        // console.log(this.props);
        const localStore = JSON.parse(localStorage.getItem('data_user_login'));
        localStore.user_id = this.props.match.params.id;
        // console.log(localStore.user_id);
        localStorage.setItem("data_user_login", JSON.stringify(localStore));
        // console.log(JSON.parse(localStorage.getItem('data_user_login')));
        
        const hitAPI = fetchCourses(this.props.match.params.id);
        // console.log(hitAPI);
        hitAPI.then((data)=>{
            this.changeState(data.data)
        });
    }

    componentWillUnmount() {

    }
    
    render() {
        // console.log(this.state.dataCourse)
        return (
            <div>
                <Header></Header>
                <main>
                <p>Kelas</p> 
                <div className="content">
                <div className="cards">
                {/* <button onClick={()=>console.log(dataCards)}> button check cards </button> */}
                    {/* ini ngga manual pake array map */}
                    {this.state.dataCourse.map((item) => {return <CardClass key={item.course_id} data = {item} nav= {this.navigateToDetailCourse}/>}) }
                    {
                    /* <Card data={handleLogin(0).then((data) => data)} /> */}
                    {/* <Card data={handleLogin(1).then((data) => data)} /> */}
                </div>
                </div>
      </main>
            </div>
        );
    }
}

// MyCourseClass.propTypes = {

// };

export default MyCourseClass;