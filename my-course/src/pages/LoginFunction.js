import React, { useState } from 'react';
import axios from 'axios';

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
      }).then((response) =>
       response.json()
      ).catch((reject)=>
      console.log(reject)
      );
}

function fetchAPIAxios(data){
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    axios.post("https://staging.komunitasmea.com/api/login", formBody, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            mode: 'cors', 
            credentials: 'include',
            body: formBody,
        },
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}

function LoginFunction(props) {
    const [loginData, setLoginData] = useState({
                email:'',
                password:'',
                errorLogin:false,
                name:'',
                user_id:''
            })
    function onChangeEvent(e){
        e.preventDefault();
        setLoginData((prev)=>({...prev,
            [e.target.name]: e.target.value
        }))
    }
    // console.log(loginData);

    async function handleSubmit(e){
        e.preventDefault();
        const {history} = props;
        console.log(history);
        const responseAPI = fetchAPIAxios(loginData);
        console.log(responseAPI);
        if (responseAPI.message === 'Success.'){
            console.log('login success');
            localStorage.setItem("data_user_login", JSON.stringify(loginData));
            history.push(`/mycourse/${responseAPI.data.user_id}`)
        }
        else if(responseAPI.message !== 'Success.'){
            setLoginData((prev)=>({
                ...prev,
                errorLogin: true
            }));
           console.log('Error: login failed, API fetch failed');
        } 
    }

    return (
        <div className="loginPage">
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
            <form
              className="formLayer"
              method="post"
              action="/"
              onSubmit={handleSubmit}
            >
              <div className="inputForm">
                <label htmlFor="inputName">Nama Lengkap: </label>
                <input
                  type="text"
                  id="inputName"
                  placeholder="Masukan Nama Lengkap"
                  name='name'
                  onChange={onChangeEvent} //handle on change
                  required
                />
              </div>

              <div className="inputForm">
                <label htmlFor="inputText">Email: </label>
                <input
                  type="text"
                  id="inputText"
                  placeholder="Masukan Email"
                  name="email"
                  onChange={onChangeEvent}
                  required
                />
              </div>
              <div className="inputForm">
                <label htmlFor="inputPass">Kata Sandi: </label>
                <input
                  type="password"
                  id="inputPass"
                  placeholder="Masukan Kata Sandi"
                  name='password'
                  onChange={onChangeEvent}
                  required
                />
              </div>
              <a href="/"> lupa kata sandi? </a>
              <div className="layerButton">
                <button id="submitBtn" type="submit">
                  Masuk
                </button>
              </div>
              <div className="errorLayer"></div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default LoginFunction;