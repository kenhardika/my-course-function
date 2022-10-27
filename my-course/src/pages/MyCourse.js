import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card';
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
    let allcourse = useParams(); // or use id to call API Request
    
  // di sini ada useState
  // const [data, setData] = useState([])

  // lifecycle dari react class component dan functional component
  // saat dia pertama kali mount dia nge hit API
  // classComponent => componentDidMount
  // functional => useEffect
    
  // useEffect(() => {
  // hit api fetchCourses dan setData si response nya
  // })

  // namanya ganti jadi idCourse, variable pake const

  return (
    <div>
      <Header></Header>
      <main>
        <p>Kelas</p>
        <div className="content">
          <div className="cards">
            {/* ini ngga manual pake array map */}
            {/* data.map((item) => <Card data = {item} />) */}
            <Card data={handleLogin(0).then((data) => data)} />
            <Card data={handleLogin(1).then((data) => data)} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCourse;