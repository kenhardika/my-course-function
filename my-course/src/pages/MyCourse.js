import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
// import { Card } from '../components/Card';

import Header from './Header';

async function fetchCourses(user_id){
    try{
        const getCourse = await fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
            method:'GET', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            mode: 'cors', 
            credentials: 'include',
        });
        const responseCourses = await getCourse.json();
        return responseCourses
    }
    catch{
        throw new Error('Fetch API Failed');
    }    
}

function MyCourse(props) {
    const idCourse = useParams(); // or use id to call API Request
    // console.log(idCourse);
    const [dataCards, setDataCards] = useState([]);
  // di sini ada useState
  // const [data, setData] = useState([])

  // lifecycle dari react class component dan functional component
  // saat dia pertama kali mount dia nge hit API
  // classComponent => componentDidMount
  // functional => useEffect
    

  useEffect(()=>{
    const hitAPI = fetchCourses(idCourse.id)
    hitAPI.then((data)=> {
      setDataCards(data.data) 
      // console.log(data);
    }
    );
  }, [setDataCards, idCourse])

  // useEffect(() => {
  // hit api fetchCourses dan setData si response nya
  // })

  // namanya ganti jadi idCourse, variable pake const done
  // const cardData = dataCards.cards;
  console.log(dataCards)
  return (
    <div>
      <Header></Header>
      <main>
        <p>Kelas</p> 
        <div className="content">
          <div className="cards">
          {/* <button onClick={()=>console.log(dataCards)}> button check cards </button> */}
            {/* ini ngga manual pake array map */}
            {dataCards.map((item) => {return <Card key={item.course_id} data = {item} />}) }
            {
            /* <Card data={handleLogin(0).then((data) => data)} /> */}
            {/* <Card data={handleLogin(1).then((data) => data)} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCourse;