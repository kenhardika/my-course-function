import React, { Component } from 'react';

async function loginAPI(data){
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return fetch("https://staging.komunitasmea.com/api/login", {
        method:'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        mode: 'cors', 
        credentials: 'include',
        body: formBody,
    }).then((response) => response.json()); 
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
        // const {email, password} = this.state;
        // console.log(email);
        // console.log(password);

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
                <div className="left-section">
                    <div className="layerText">
                        <p> KOMUNITAS MEA </p>
                        <p> Komunitas Jago Jualan Online </p>
                    </div>
                </div>
                <div className="right-section">
                    <div className="right-layer">
                            <div className="loginTitleLayer">
                                <p>MASUK</p>  
                            </div>
                            <div className="loginBannerLayer">
                                <p>Silakan Masuk ke akun Komunitas MEA kamu!</p>
                            </div>
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
                                <div className="layerButton">
                                    <button id='submitBtn' type='submit' > Masuk </button>    
                                </div>     
                            </form>
                    </div>
                </div> 
            </div>
        );
    }
}
export default login;       