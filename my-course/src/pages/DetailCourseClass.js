import React, { Component } from 'react';
import Header from './Header';
import fetchDetailCourse from '../utils/fetchDetailCourse'
class DetailCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }

    changeState(dat){
        this.setState({
           data: dat
        })
    }

    componentDidMount() {
        // console.log(this.props.match.params.course_id)
        const {match:{
            params:{
                course_id,
                user_id
            }
        }} = this.props;
        const hitAPI = fetchDetailCourse(course_id, user_id);
        hitAPI.then((data)=> this.changeState(data.data))
    }
    componentWillUnmount() {

    }

    render() {
        console.log(this.state.data);
        
        return (
            <div>
            <Header></Header>
            <main>
                This is Detail Course Page!
            </main>
            </div>
        );
    }
}

export default DetailCourseClass;