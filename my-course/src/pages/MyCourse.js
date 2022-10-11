import React from 'react';
import {useParams} from 'react-router-dom';
import Card from './Card';

async function fetchCourses(user_id){
    return fetch(`https://staging.komunitasmea.com/api/user/${user_id}/courses/active`, {
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
        const handleLogin = async ()=>{
            // console.log('hit handle login');
            // console.log(allcourse.allcourse);
            const responseAPI = await fetchCourses(allcourse.allcourse)
                .then((response)=> response.data);
            return responseAPI
        }
        let resp = handleLogin();
        return (
            <div>
                <header> 
                    <div className="logo-layer">
                        logo
                    </div>

                    <div className="profile-layer">
                        <img src="/" alt="" id='avatar' />
                        <p> username </p>
                    </div>
                </header>
                <main>
                    <p>
                        Kelas{}
                    </p>
                    <div className="content">
                        <div className="cards">
                            <div className="card">
                                <Card response = { resp }/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
}

export default MyCourse;