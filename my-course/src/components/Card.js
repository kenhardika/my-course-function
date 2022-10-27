import React, {} from 'react';
import handleToDetailCourse from '../utils/handleToDetailCourse';
// ini bukan component, jadikan utils done
// async function fetchDetailCourse(course_id, user_id) done

// ini pindah ke component done
// props di destructuring done
function Card({titleCourse, ins_name, bgCourse, ins_photo, courseid, local}) {
    // ngga perlu props dimasukkin ke state langsung ambil data ke props done
   
    
    // masukin ke utils done
    // async function handleToDetailCourse(e) done

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
                        <button id='courseBtn' onClick={ (e)=> handleToDetailCourse(e, courseid, local.user_id) }>Lanjut</button>
                    </div>
            </div>
        </div>
    );
}

// ini yang diexport componentnya aja done
export { Card };

