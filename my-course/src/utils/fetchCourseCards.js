import axios from 'axios';

async function fetchCoursesCards(user_id){
    try{
        let response =
        axios.get(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          withCredentials: true
        });
        response.then((res)=>
          {
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
export default fetchCoursesCards