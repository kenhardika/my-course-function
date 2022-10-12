import React, { useState } from 'react';

function Card(props) {
    // console.log(props.data.then((card)=>console.log(card)));
    const [titleCourse, setTitleCourse] = useState(null);
    const [ins_name, setIns_name] = useState(null);
    const [ins_role, setIns_role] = useState(null);

    props.data.then((dataCard)=>{
        // console.log(dataCard);
        setTitleCourse(dataCard.titleCourse);
        setIns_name(dataCard.ins_name);
        setIns_role(dataCard.ins_role);
    })

    return (
        <div className='card-inside'>
            <p>This is the card title: {titleCourse}</p>
            <p>This is the card instructor: {ins_name}</p>
            <p>This is the card instructor's role: {ins_role}</p>
        </div>
    );
}

export default Card;