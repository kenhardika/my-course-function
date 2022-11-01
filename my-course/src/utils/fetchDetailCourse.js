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
        response.then((res)=>
          {
            // console.log(res.data);
           return res.data 
        }
        ).catch((err)=>{
          throw Error(err)
        })
        return response
      }
    catch{
        throw new Error('Fetch API Failed');
    }    
}
export default fetchDetailCourse