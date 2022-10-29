import React, { Component } from 'react';
import Header from './Header';
import fetchDetailCourse from '../utils/fetchDetailCourse'
import VideoCourse from './VideoCourse';
// import mockjson from './mock.json';
class DetailCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[], current:''};
    }

    changeState(dat){
        this.setState({
           data: dat
        })
    }

    async fetchResponseAPI(course,user){
        
        // if(!responseAPI) return;
        // if(!responseAPI.data.length)return;
        // console.log(responseAPI);
        try{
            const responseAPI = await fetchDetailCourse(course, user); // ToDo: async await
            const response = responseAPI.data;
            // if(!response.length)return;
            this.setState({
                data: response
            });
            // console.log(response)
                // console.log(this.state.dataCourse)    
        }

        catch{
            console.log('loading fetch api...')
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.course_id)
        const {match:{
            params:{
                course_id,
                user_id
            }
        }} = this.props;
        
        
        this.fetchResponseAPI(course_id,user_id)
        // fetchResponseAPI();
        // console.log(mockjson);
        // this.changeState(mockjson)


    }
    componentWillUnmount() {

    }

    // async checkEachChapters(chap){
    // return await chap.map((dat)=> console.log(dat));
    // }

    render() {
        // console.log(this.state.data);

        if(this.state.data.length){        
            const{data:{title, chapters}} = this.state;
            console.log(title);
            console.log(chapters);
        }

        
        // if(chapters.length){
        //     console.log(chapters[0]);
        // }
        // chapters.forEach(item=>console.log(item));

        // const {data: {title, chapters:chap } } = this.state; // ToDO: untuk chapters mainin index chapter & lesson
        // console.log(chap);
        // console.log()
        // todo: class dan function beda repo 
        // this.checkEachChapters(chapters)
        // chapters.map((data)=>console.log(data));
        return (
            <div>
            <Header></Header>
            <main>
                <p>{"title"}</p>
                <VideoCourse></VideoCourse>
                {/* {chapters.map((arr)=><li key={arr.chapter_id}> </li>)} */}
                
                <div className="buttonControls">
                    <button id='nextBtn'>next</button> 
                    <button id='prevBtn'>prev</button>
                </div>
            </main>
            </div>
        );
    }
}

export default DetailCourseClass;