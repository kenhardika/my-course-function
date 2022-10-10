import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'; // for integrating button to routes

function Profile(props) {
    let navigate = useNavigate(); // assign useNavigate() to variable
    let {username} = useParams(); // or use id to call API Request
    return (
        <div>
         This is {username} Profile Page   <button onClick={()=>{
            navigate('/'); // navigate it to preferred destination
         }}> go to Home </button>
        </div>
    );
}

export default Profile;