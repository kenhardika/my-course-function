import React, { Component } from 'react';
import Header from './Header';
import fetchDetailCourse from '../utils/fetchDetailCourse'
import VideoCourse from './VideoCourse';
class DetailCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
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
        const responseAPI = fetchDetailCourse(course_id, user_id); // ToDo: async await
        responseAPI.then((data)=> this.changeState(data.data))
    }
    componentWillUnmount() {

    }

    // async checkEachChapters(chap){
    // return await chap.map((dat)=> console.log(dat));
    // }

    render() {
        // console.log(this.state.data);
        const {data: {title, chapters  } } = this.state; // ToDO: untuk chapters mainin index chapter & lesson
        console.log(chapters) // todo: class dan function beda repo 

        // this.checkEachChapters(chapters)
        // chapters.map((data)=>console.log(data));
        return (
            <div>
            <Header></Header>
            <main>
                <p>{title}</p>
                <VideoCourse></VideoCourse>
                {/* {chapters.map((arr)=><li key={arr.chapter_id}> </li>)} */}
            </main>
            </div>
        );
    }
}

export default DetailCourseClass;