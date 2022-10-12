import React, { } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailCourse } from './Card';
import Header from './Header';
import VideoCourse from './VideoCourse';

function DetailCourse(props) {
    // console.log(courseid.alldetailcourse);
    let courseid = useParams();

    // const [title, setTitle] = useState([]);

async function fetchAPIDetailCourse(){
        let local = await JSON.parse(localStorage.getItem('data_user_login'));
        let detailCourseAPI = await fetchDetailCourse(courseid.alldetailcourse, local.user_id);
        console.log(detailCourseAPI.data.chapters);
        
        let chapterTitles = [];
        let chapterVids = [];

        detailCourseAPI.data.chapters.forEach((chapter)=> {
            // console.log(chapter.title);
            
            chapter.lessons.forEach((lesson)=>{
                // console.log(lesson.link);
                chapterVids.push(lesson.link);
                chapterTitles.push(lesson.title);
            })

        })
        // console.log(chapterTitles);
        // console.log(chapterVids);

        return {
            chapterTitles,
            chapterVids
        }
}    
    fetchAPIDetailCourse().then((data)=>console.log(data));
    return (
        <div>
            <Header></Header>
            <main>
                <p>title here{}</p>
                <VideoCourse/>
                <div className="layerSwitchButton">
                    <button>previous</button>
                    <button>next</button>
                </div>
                {/* <div className="layerCourse">
                    <div className="layerVideo">

                    </div>
                    <div className="layerSwitchButton">
                        <button>previous</button>
                        <button>next</button>
                    </div>
                </div> */}
            </main>
        </div>
    );
}

export default DetailCourse;