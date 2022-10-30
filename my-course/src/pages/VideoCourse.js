import React from 'react';

// use destructuring { link }
function VideoCourse(props) {
    return (
        <div className='videoCourseLayer'>
            <div className="layerVideo">
                <iframe title='video1' src={props.link} width={1000} height={500} ></iframe>
            </div>
        </div>
    );
}

export default VideoCourse;