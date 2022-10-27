import React, { useState } from 'react';

// ini bukan component, jadikan utils
async function fetchDetailCourse(course_id, user_id){
    try{
        const getCourse = await fetch(`https://staging.komunitasmea.com/api/course?course_id=${course_id}&user_id=${user_id}`, {
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

// ini pindah ke component
// props di destructuring
function Card(props) {
    // console.log(props.data.then((card)=>console.log(card)));
    // ngga perlu props dimasukkin ke state langsung ambil data ke props
    const [titleCourse, setTitleCourse] = useState(null);
    const [ins_name, setIns_name] = useState(null);
    const [ins_role, setIns_role] = useState(null);
    const [bgCourse, setbgCourse] = useState(null);
    const [ins_photo, setIns_photo] = useState(null);
    const [courseid, setCourseId] = useState(null);
    const [local, setLocal] = useState(null);
    
    props.data.then((dataCard)=>{
        // console.log(dataCard);
        setTitleCourse(dataCard.titleCourse);
        setIns_name(dataCard.ins_name);
        setIns_role(dataCard.ins_role);
        setbgCourse(dataCard.bgCourse);
        setIns_photo(dataCard.ins_photo);
        setCourseId(dataCard.courseid);
        setLocal(dataCard.local);
    })
    // console.log(local);
    
    async function handleToDetailCourse(e){
        e.preventDefault();
        const responseAPI = await fetchDetailCourse(courseid, local.user_id);
        // console.log(responseAPI); // response OK
        if(responseAPI.message === 'Success.'){
            
            window.location.href = `/detailcourse/${courseid}`; // ${}
        }
        else{
            console.log('error detail course')
            return
        }
        
        return responseAPI
    }


    return (
        <div className='card-inside'>
            <div className="top-section">
                    <img src={bgCourse} alt="" />
            </div>
            <div className="bottom-section">
                    <div className="title-section">
                        {titleCourse}
                    </div>
                    <div className="instructor-section">
                        <img src={ins_photo} alt="" />
                        <div className="instructor-detail">
                            <div className="instructor-name">
                                {ins_name}
                            </div>
                            <div className="instructor-role">
                                {ins_role}
                            </div>
                        </div>
                    </div>
                    <div className="layerButton">
                        <button id='courseBtn' onClick={ handleToDetailCourse }>Lanjut</button>
                    </div>
            </div>
        </div>
    );
}

export { Card, fetchDetailCourse };
