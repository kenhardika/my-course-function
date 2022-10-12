import React from 'react';
import {useParams} from 'react-router-dom';
import Card from './Card';
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

function MyCourse(props){
        let allcourse = useParams(); // or use id to call API Request
        const handleLogin = async (num)=>{
            const courseAPI = await fetchCourses(allcourse.allcourse);
            const courseAPIData = courseAPI.data[num];
            try{
                const{
                    title: titleCourse,
                    instructors: {0:{ name: ins_name }},
                    instructor_role: ins_role,
                    instructors: {0:{ photo: ins_photo}},
                    image: bgCourse
                } = courseAPIData;
                return {
                        titleCourse, 
                        bgCourse, 
                        ins_name, 
                        ins_role, 
                        ins_photo                     
                }
            }
            catch{
                throw new Error('Response failed');
            }
        }
        
        return (
            <div>
                <Header></Header>
                <main>
                    <p>
                        Kelas{}
                    </p>
                    <div className="content">
                        <div className="cards">
                                <Card data = {
                                    handleLogin(0).then((data)=> data)
                                } />
                                <Card data = {
                                    handleLogin(1).then((data)=> data)
                                } />
                        </div>
                    </div>
                </main>
            </div>
        );
}

export default MyCourse;