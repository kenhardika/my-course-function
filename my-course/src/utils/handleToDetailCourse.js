import fetchDetailCourse from '../utils/fetchDetailCourse';

async function handleToDetailCourse(e, courseid, userid){
    e.preventDefault();
    const responseAPI = await fetchDetailCourse(courseid, userid);
    // console.log(responseAPI); // response OK
    if(responseAPI.message === 'Success.'){
        // ini redirect ngga pke href, pake nya react-router-dom
        // window.location.href = `/detailcourse/${courseid}`; // ${}
        return true
    }
    else{
        console.log('error detail course')
        return false
    }
    // return responseAPI
}

export default handleToDetailCourse