import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import Header from './Header';
import fetchCoursesCards from '../utils/fetchCourseCards';

function MyCourse(props) {
    const idCourse = useParams(); 
    const [dataCards, setDataCards] = useState([]);    

  async function fetchCourses(courseid){
    try{
      const responseAPI = await fetchCoursesCards(courseid);
      if(!dataCards.length){
        setDataCards(responseAPI.data.data);
      }
      return responseAPI.data.data
    }
    catch{

    }
  }

  useEffect(()=>{
    fetchCourses(idCourse.id);
    });

  function navigateToDetailCard(e, course_id){
    e.preventDefault();
    const {history} = props;
    history.push(`/detailcourse/${course_id}/${idCourse.id}`)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <p>Kelas</p> 
        <div className="content">
          <div className="cards">
            {dataCards.map((item) => {return <Card key={item.course_id} data = {item} navigateToDetailCard ={navigateToDetailCard}/>}) }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCourse;