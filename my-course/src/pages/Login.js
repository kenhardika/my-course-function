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
    }).then((response) => response.json()).catch((reject)=> console.log(reject));
}

class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'default',
            password: 'default',
            errorLogin: false,
            name: '',
            user_id:'', 
        }
    }
    
    render() {

        const handleSubmit = async e => {
            e.preventDefault();
            const responseAPI = await loginAPI(this.state);        
            // console.log(responseAPI);
            if (responseAPI.message === 'Success.'){
                // console.log(responseAPI.data.user_id);
                
                console.log('login success');
                localStorage.setItem("data_user_login", JSON.stringify(this.state));
                window.location.href = `/mycourse/${responseAPI.data.user_id}`; // ${}
            } 
            else{
                this.setState({
                    errorLogin: true
                });
                console.log('login failed');
                return 
            } 
        }
        
        if (this.state.errorLogin === true){
            this.setState({
                errorLogin: false
            });
            window.location.href = `/`; // ${}
            alert('Error: Login Failed');
            return 
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
                                    <label htmlFor="inputName">Nama Lengkap: </label>
                                    <input type="text" id="inputName" placeholder='Masukan Nama Lengkap' onChange={(e)=>{
                                        this.setState({
                                            name: e.target.value
                                        })
                                    }} required/>
                                </div>
                                
                                <div className="inputForm">
                                    <label htmlFor="inputText">Email: </label>
                                    <input type="text" id="inputText" placeholder='Masukan Email' onChange={(e)=>{ 
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }} required/>
                                </div>
                                <div className="inputForm">
                                    <label htmlFor="inputPass">Kata Sandi: </label>
                                    <input type="password" id="inputPass" placeholder='Masukan Kata Sandi' onChange={(e)=>{ 
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }} required/>
                                </div>
                                
                                <a href='/'> lupa kata sandi? </a>
                                
                                <div className="layerButton">
                                    <button id='submitBtn' type='submit' > Masuk </button>    
                                </div>
                                <div className='errorLayer'></div>
                            </form>
                    </div>
                </div> 
            </div>
        );
    }
}
export default login;       