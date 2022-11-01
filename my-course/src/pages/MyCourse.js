import React, {useEffect, useState, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import Header from './Header';
import fetchCoursesCards from '../utils/fetchCourseCards';

function MyCourse(props) {
    const idCourse = useParams(); 
    const [dataCards, setDataCards] = useState([]);    

  const fetchCourses = useCallback(async () => {
    try {
      const responseAPI = await fetchCoursesCards(idCourse.id);
        setDataCards(responseAPI.data.data);
      return responseAPI.data.data;
    } catch {}
  }, [idCourse.id]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

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