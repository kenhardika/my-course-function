import React from 'react';

function VideoCourse(props) {
    return (
        <div className='videoCourseLayer'>
            <div className="layerVideo">
                <iframe title='video1' src={props.link} frameBorder="0"></iframe>
            </div>
        </div>
    );
}

export default VideoCourse;