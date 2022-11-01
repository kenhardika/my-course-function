import axios from 'axios';

async function fetchDetailCourse(course_id, user_id){
    try{
        let response =
        axios.get(`https://staging.komunitasmea.com/api/course?course_id=${course_id}&user_id=${user_id}`, {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          withCredentials: true
        });
        return response
      }
    catch{
        throw new Error('Fetch API Failed');
    }    
}
export default fetchDetailCourse