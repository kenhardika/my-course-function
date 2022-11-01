import React, {} from 'react';

function Card({data:{
            title, 
            image, 
            instructors: {0:{ name, photo }},
            instructor_role,
            course_id
            }, navigateToDetailCard
            }){
    
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
                        <button id='courseBtn' onClick={(e)=> navigateToDetailCard(e, course_id) }>Lanjut</button>
                    </div>
            </div>
        </div>
    );
}

export { Card };

