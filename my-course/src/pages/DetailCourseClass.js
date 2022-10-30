import React, { Component } from 'react';
import Header from './Header';
import fetchDetailCourse from '../utils/fetchDetailCourse'
import VideoCourse from './VideoCourse';
// import mockjson from './mock.json';
class DetailCourseClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  data:{
                            chapters:[],
                            title:''
                            },
                        lessons:[]
                        };
        // this.addLessons= this.addLessons.bind(this);
    }

    // addLessons(lesson){
    //     this.setState({
    //         // ...prevState,
    //         // [lessons]:[value]
    //         lessons: this.state.lessons.push(lesson)
    //     });
    //     // console.log(this.state.lessons)
    // }

    async fetchResponseAPI(course,user){

        // if(!responseAPI) return;
        // if(!responseAPI.data.length)return;
        // console.log(responseAPI);
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

        // const {data:{
        //     title,
        //     chapters
        //     }
        // } = this.state;
        // console.log(chapters);
        // const [arr1, arr2, arr3, arr4, arr5] = chapters;
        // if(chapters.length>0){
        //     chapters.map((arr)=>
        //         arr.lessons.map((lesson)=> {
        //             // console.log(lesson.link);
        //             // console.log(lesson.lesson_id);
        //             // console.log(lesson.title);
        //             this.setState({
        //                 lessons: lesson
        //             });
        //             // console.log(lesson);
        //             // change state
        //         })
        // )}
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevState);
        const {data:{chapters}} = prevState;
        // console.log(chapters);
        // const [...rest] = chapters
        // console.log(rest);

        if(this.state.lessons.length){
            // console.log('something');
            // console.log(this.state.lessons);
            return
        }
        else if(!this.state.lessons.length){
            // console.log('nothing');
            // this.setState({
            //     lessons: ['something']
            // })
            chapters.map((arr)=>
                arr.lessons.map((lesson)=>
                // prev = this.state previous, next = this.state kosong
                this.setState((prev)=>({
                        lessons: prev.lessons.concat(lesson)
                    }
                )))
            )
            return
        }

        // if(chapters.length>0){
        //     this.setState({
        //         lessons: ['this is lessons']
        //     })
        // }

        // if(chapters.length>0){
        //     chapters.map((arr)=>
        //         arr.lessons.map((lesson)=> {
        //             // console.log(lesson.link);
        //             // console.log(lesson.lesson_id);
        //             // console.log(lesson.title);
        //             this.setState(
        //                 {
        //                     lessons: prevState.lessons.concat(lesson)
        //                 })

        //             // this.setState((prev, next)=>({
        //             //     lessons: prev.lessons.concat(next)
        //             // }));
        //             // console.log(lesson);
        //             // change state
        //         })
        // )}
    }

    componentWillUnmount() {

    }

    // async checkEachChapters(chap){
    // return await chap.map((dat)=> console.log(dat));
    // }

    render() {
        // console.log(this.state.data.chapters)
        console.log(this.state.lessons);
        const {lessons } = this.state.lessons;
        console.log(lessons)
    //     const {data:{
    //         title,
    //         chapters
    //     }
    // } = this.state;
    // chapters.map(arr=>
    //     this.setState({
    //         lessons: this.state.lessons.push(arr)
    //     })
    //     )
        // console.log(chapters);
        // const [arr1, arr2, arr3, arr4, arr5] = chapters;
        // console.log(this.state.lessons);
        // const {data:{
        //             title,
        //             chapters
        //             }
        //         } = this.state;
        // console.log(chapters);
        // // const [arr1, arr2, arr3, arr4, arr5] = chapters;
        // chapters.map((arr)=>
        //     arr.lessons.map((lesson)=> {
        //         console.log(lesson.link);
        //         console.log(lesson.lesson_id);
        //         console.log(lesson.title);
        //         // this.changeState('id', lesson.lesson_id);
        //         // change state
        //     })
        // )
        // console.log(this.state.lessons);


        // setTimeout(()=>{

            // console.log('udah bagus');
            // console.log(this.state.data.chapters[0]);
        // if(this.state.data.length){
        //     console.log('udah bagus')
        // }
        // console.log(this.state.data.chapters)
        // if(!this.state.data.length){
            // const{data} = this.state;
            // console.log(data.chapters);
            // console.log(chapters);
        // }


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

        // }, 300);
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