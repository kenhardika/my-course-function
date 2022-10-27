import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailCourse } from './Card';
import Header from './Header';
import VideoCourse from './VideoCourse';

let DEFAULT_LINK = "https://smarketing-staging.storage.googleapis.com/course-content/kelas-cs/videos/CSS-lesson.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG3HYWZ77RFD7HWVPVLL2G%2F20221012%2FJakarta%2Fs3%2Faws4_request&X-Amz-Date=20221012T082936Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bbf2e1526422e62679ac0727ed34aec131f13ecb6e7d65b2df77af3212f4f5b9";

function DetailCourse(props) {
    // console.log(courseid.alldetailcourse);
    let courseid = useParams();

    // const [link, setLink] = useState();

    async function fetchAPIDetailCourse() {
      // useEffect(() => {
      //   fetch("https://randomuser.me/api/")
      //     .then((results) => results.json())
      //     .then((data) => {
      //       setData(data);
      //     });
      // }, [setData]);

      let local = await JSON.parse(localStorage.getItem("data_user_login"));
      let detailCourseAPI = await fetchDetailCourse(
        courseid.alldetailcourse,
        local.user_id
      );
      console.log(detailCourseAPI.data.chapters);

      let chapterTitles = [];
      let chapterVids = [];

      detailCourseAPI.data.chapters.forEach((chapter) => {
        // console.log(chapter.title);

        chapter.lessons.forEach((lesson) => {
          // console.log(lesson.link);
          chapterVids.push(lesson.link);
          chapterTitles.push(lesson.title);
        });
      });
      // console.log(chapterTitles);
      // console.log(chapterVids);

      return {
        chapterTitles,
        chapterVids,
      };
    }    

    async function handleNextBtn(e){
        // let nextVid = '';
        // let vidlinks = [];
        e.preventDefault();
        let dataLink = await fetchAPIDetailCourse().then((data)=>{
            console.log(data.chapterVids);
            
            // data.chapterVids.shift()
            //  data.chapterVids
        });
        return dataLink
    }

    return (
        <div>
            <Header></Header>
            <main>
                <p>title here{}</p>
                <VideoCourse link = {DEFAULT_LINK}/>
                <div className="layerSwitchButton">
                    <button >previous</button>
                    <button onClick={ handleNextBtn }>next</button>
                </div>
            </main>
        </div>
    );
}

export default DetailCourse;