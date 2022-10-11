import React, { Component } from 'react';

async function loginAPI(data){
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    // console.log(formBody);
    
    // console.log(JSON.stringify(data));
    // let response = await item.json();
    return fetch("https://staging.komunitasmea.com/api/login", {
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
    }).then((response) => response.json()); 
    // console.log(response);
}

class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'default',
            password: 'default',
        }
    }
    
    render() {

        const {email, password} = this.state;

        // let data = {
        //             email: 'candidate@mail.com',
        //             password: 'candidate123'
        //         }
        console.log(email);
        console.log(password);

        const handleSubmit = async e => {
            e.preventDefault();
            const responseAPI = await loginAPI(this.state);
            console.log(responseAPI);

            if (responseAPI.message === 'Success.'){
                console.log('login success');
                window.location.href = `/mycourse/${responseAPI.data.user_id}`; // ${}
            } 
            else{
                console.log('login failed');
            }
        }
        
        return (
            <div className='loginPage'>
                <p>Welcome to the Login Page</p>
                <form className='formLayer' method="post" action='/' onSubmit={ handleSubmit }>
                    <div className="inputForm">
                        <label htmlFor="inputText">Email: </label>
                        <input type="text" id="inputText" onChange={(e)=>{ 
                            this.setState({
                                email: e.target.value
                            })
                         }} required/>
                    </div>
                    <div className="inputForm">
                        <label htmlFor="inputPass">Password: </label>
                        <input type="password" id="inputPass" onChange={(e)=>{ 
                            this.setState({
                                password: e.target.value
                            })
                         }} required/>
                    </div>
                    <button id='submitBtn' type='submit' > Masuk </button>     
                </form>

            </div>
        );
    }
}



export default login;       