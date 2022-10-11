import React from 'react';
import {useParams} from 'react-router-dom';

async function fetchCourses(user_id){

    return fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        method:'GET', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        mode: 'cors', 
        credentials: 'include',
    }).then((response) => response.json()); 
}

function MyCourse(props){
        let allcourse = useParams(); // or use id to call API Request
        async function handleLogin(){
            // console.log('hit handle login');
            // console.log(allcourse.allcourse);
            const responseAPI = await fetchCourses(allcourse.allcourse);
            console.log(responseAPI);

            
        }
        handleLogin();

        return (
            <div>
                <p>
                    Welcome to the Course Page!
                </p>
                {/* <button onClick={ handleLogin }> check api </button> */}
            </div>
        );
}

export default MyCourse;