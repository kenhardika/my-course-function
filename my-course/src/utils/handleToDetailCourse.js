import {useNavigate} from "react-router-dom"
import fetchDetailCourse from '../utils/fetchDetailCourse';

async function handleToDetailCourse(e, courseid, userid){
    e.preventDefault();
    const navigate = useNavigate()
    const responseAPI = await fetchDetailCourse(courseid, userid);
    // console.log(responseAPI); // response OK
    if(responseAPI.message === 'Success.'){
        // ini redirect ngga pke href, pake nya react-router-dom
        // window.location.href = `/detailcourse/${courseid}`; // ${}
        navigate(`/detailcourse/${courseid}`);
    }
    else{
        console.log('error detail course')
        return
    }
    return responseAPI
}

export default handleToDetailCourse