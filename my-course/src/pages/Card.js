import React, {  } from 'react';

function Card(props) {
    console.log(props.response.then((data)=>{ console.log(data[0]) }));

    return (
        <div>
            
        </div>
    );
}

export default Card;