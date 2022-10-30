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
                        link:[],
                        title:[],
                        lesson_id:[],
                        now:{   link:'', 
                                title:'', 
                                lesson_id:''
                            },
                        counter:0
                        };
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePreviousButton = this.handlePreviousButton.bind(this);
        // this.changeNowPlaying = this.changeNowPlaying(this);
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
            if(!this.state.now.link){
                this.setState({
                    now: {
                        link: this.state.link[this.state.counter],
                        title: this.state.title[this.state.counter],
                        lesson_id: this.state.lesson_id[this.state.counter],
                    }
                })
                console.log('set State kosong dan baru diisi')
                return
            }
            else if(this.state.now.link.length){ // bakal loop terus ganti kondisi.
                
                console.log('state sudah adaan');
                return
            }

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

    componentWillUnmount() {

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
        // console.log('pprevioys')
        // this.setState(prev=>({
        //     counter: prev.counter-1 
        // }));
    }

    changeNowPlaying(num){
        // if(!this.state.now.link){
        //     this.setState({
        //         now: {
        //             link: this.state.link[num],
        //             title: this.state.title[num],
        //             lesson_id: this.state.lesson_id[num],
        //         }
        //     })
        //     console.log('set State kosong dan baru diisi')
        //     return
        // }
        // else if(this.state.now.link.length){
        //     console.log('state sudah adaan');
        //     return
        // }
    }

    // async checkEachChapters(chap){
    // return await chap.map((dat)=> console.log(dat));
    // }

    render() {
        // console.log(this.state.title);
        console.log(this.state.counter);
        const [...title] = this.state.title;
        const [...link] = this.state.link;

        if(this.state.link.length>0){
            // console.log(this.state.lessons);
            const [...link] = this.state.link;
            // console.log(link[2]);
            // console.log(this.state.now)
        }
        if(this.state.title.length>0){
            // console.log(this.state.lessons);
            const [...title] = this.state.title;
            // console.log(title[2]);
            // console.log(this.state.now)
        }
        console.log(this.state.link[this.state.counter])
        return (
            <div>
            <Header></Header>
            <main>
                <p>{title[this.state.counter]}</p>
                {/* <VideoCourse link={link[this.state.counter]}></VideoCourse> */}
                <iframe title='videoplayer' src={link[this.state.counter]} 
                        width={1300} height={500} ></iframe>
                <p>{link[this.state.counter]}</p>
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