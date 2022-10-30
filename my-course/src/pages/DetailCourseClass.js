import React, { Component } from 'react';
import Header from './Header';
import fetchDetailCourse from '../utils/fetchDetailCourse'
// import mockjson from './mock.json';
class DetailCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:{
                            chapters:[],
                            title:''
                            },
                        link:[],
                        title:[],
                        lesson_id:[],
                        counter:0
                        };
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePreviousButton = this.handlePreviousButton.bind(this);
    }

    async fetchResponseAPI(course,user){
        try{
            const responseAPI = await fetchDetailCourse(course, user); // ToDo: async await
            const response = await responseAPI.data;
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
        const {match:{
            params:{
                course_id,
                user_id
            }
        }} = this.props;
        this.fetchResponseAPI(course_id,user_id);
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevState);
        const {data:{chapters}} = prevState;
        if(this.state.link.length){
            return
        }
        else if(!this.state.link.length){
            chapters.map((arr)=>
                arr.lessons.map((lesson)=>
                // prev = this.state previous, next = this.state kosong
                this.setState((prev)=>({
                        link: prev.link.concat(lesson.link),
                        title: prev.title.concat(lesson.title),
                        lesson_id: prev.lesson_id.concat(lesson.lesson_id),
                    }
                ))
                )
            )

            return
        }
    }
   
    handleNextButton(e){
        e.preventDefault();
        // console.log(this.state.title[47]);
        if(this.state.counter >= (this.state.title.length-1)){
            this.setState(prev=>({
                counter: (prev.counter+1) - (this.state.title.length) 
            }));
        }
        else{
            this.setState(prev=>({
                counter: prev.counter +1 
            }));
        }
    }

    handlePreviousButton(e){
        e.preventDefault();
        if(this.state.counter === 0){
            this.setState(prev=>({
                counter: prev.counter + (this.state.link.length-1) 
            }));
        }
        else{
            this.setState(prev=>({
                counter: prev.counter - 1 
            }));
        }
     
    }

    render() {
        // console.log(this.state.title);
        // console.log(this.state.counter);
        const counter = this.state.counter;
        const [...title] = this.state.title;
        const [...link] = this.state.link;

        // console.log(this.state.link[this.state.counter])
        return (
            <div>
            <Header></Header>
            <main>
                <p>{title[counter]}</p>
                {/* <VideoCourse link={link[this.state.counter]}></VideoCourse> */}
                <iframe title='videoplayer' src={link[counter]} 
                        width={1300} height={500} ></iframe>
                <p>{link[counter]}</p>
                {/* {chapters.map((arr)=><li key={arr.chapter_id}> </li>)} */}

                <div className="buttonControls">
                    <button id='prevBtn' onClick={this.handlePreviousButton}>prev</button>
                    <button id='nextBtn' onClick={this.handleNextButton}>next</button>
                </div>
            </main>
            </div>
        );
    }

}

export default DetailCourseClass;