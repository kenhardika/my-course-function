import React, {} from 'react';
import handleToDetailCourse from '../utils/handleToDetailCourse';
// ini bukan component, jadikan utils done
// async function fetchDetailCourse(course_id, user_id) done

// ini pindah ke component done
// props di destructuring done
function Card({data:{
            title, 
            image, 
            instructors: {0:{ name, photo }},
            instructor_role,
            }
            }){
    // ngga perlu props dimasukkin ke state langsung ambil data ke props done
    // const navigate = useNavigate();
    // console.log(title);
    function checkHandleSuccess(e, course, loc ){
        if(handleToDetailCourse(e, course, loc) === true){
            // navigate(`/detailcourse/${courseid}`);
        }
        else{
            return
        }
    }
    // masukin ke utils done
    // async function handleToDetailCourse(e) done
    console.log(photo)
    return (
        <div className='card-inside'>
            <div className="top-section">
                    <img src={image} alt="" />
            </div>
            <div className="bottom-section">
                    <div className="title-section">
                        {title}
                    </div>
                    <div className="instructor-section">
                        <img src={photo} alt="" />
                        <div className="instructor-detail">
                            <div className="instructor-name">
                                {name}
                            </div>
                            <div className="instructor-role">
                                {instructor_role}
                            </div>
                        </div>
                    </div>
                    <div className="layerButton">
                        <button id='courseBtn' onClick={ (e)=> checkHandleSuccess(e) }>Lanjut</button>
                    </div>
            </div>
        </div>
    );
}

// ini yang diexport componentnya aja done
export { Card };

