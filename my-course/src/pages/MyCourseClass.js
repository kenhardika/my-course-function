import React, { Component } from 'react';
import fetchCourses from '../utils/fetchCourseCards';
import Header from './Header';
import { Card } from '../components/Card';

// import PropTypes from 'prop-types';

class MyCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {dataCourse:[]};
    }

    // componentWillMount() {
    // }
    changeState(data){
        this.setState({
           dataCourse: data
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        // console.log(JSON.parse(localStorage.getItem('data_user_login')));
        // const userId = JSON.parse(localStorage.getItem('data_user_login')).user_id;
        const hitAPI = fetchCourses(this.props.match.params.id);
        // console.log(hitAPI);
        hitAPI.then((data)=>{
            this.changeState(data.data)
        });
    }

    componentWillUnmount() {

    }
    
    render() {
        console.log(this.state.dataCourse)
        return (
            <div>
                <Header></Header>
                <main>
                <p>Kelas</p> 
                <div className="content">
                <div className="cards">
                {/* <button onClick={()=>console.log(dataCards)}> button check cards </button> */}
                    {/* ini ngga manual pake array map */}
                    {this.state.dataCourse.map((item) => {return <Card key={item.course_id} data = {item} />}) }
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