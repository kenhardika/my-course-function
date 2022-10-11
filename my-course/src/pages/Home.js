import React from 'react';

async function login(){
    let data = {
        email: 'candidate@mail.com',
        password: 'candidate123'
    }
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    const item = await fetch("https://staging.komunitasmea.com/api/login", {
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        method:'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        mode: 'cors', 
        credentials: 'include',
        body: formBody,
    });
    // console.log(JSON.stringify(data));
    let response = await item.json();
    console.log(response);
}

function Home(props) {
    login();
    return (
        <div>
            This is Home Page 
        </div>
    );
}

export default Home;