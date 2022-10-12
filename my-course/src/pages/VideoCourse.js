import React from 'react';

function VideoCourse(props) {
    return (
        <div className='videoCourseLayer'>
            <div className="layerVideo">
                <iframe title='video1' src="https://smarketing-staging.storage.googleapis.com/course-content/kelas-cs/videos/CSS-lesson.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GOOG3HYWZ77RFD7HWVPVLL2G%2F20221012%2FJakarta%2Fs3%2Faws4_request&X-Amz-Date=20221012T075932Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a6088a86c1c0b055c3e9d595b050ce393d5e7a1eb7b48b13a1a5b678b2411484" frameBorder="0"></iframe>
            </div>
        </div>
    );
}

export default VideoCourse;