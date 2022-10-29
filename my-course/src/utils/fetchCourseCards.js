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
        // if(!responseCourses.data.length) return;
        // console.log(responseCourses);
        return responseCourses
    }
    catch{
        throw new Error('Fetch API Failed');
    }    
}
export default fetchCourses