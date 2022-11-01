import React, { useState } from 'react';
import axios from 'axios';

function fetchAPIAxios(data){
    let formBody = [];
    for (let property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    try{
      let response =
      axios.post("https://staging.komunitasmea.com/api/login", formBody, {
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true
      });
      return response
    }

    catch{
      throw Error('Error Fetch API');
    }

    
}

function LoginFunction(props) {
    const [loginData, setLoginData] = useState({
                email:'',
                password:'',
            })
    function onChangeEvent(e){
        e.preventDefault();
        setLoginData((prev)=>({...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        const {history} = props;
        const responseAPI = await fetchAPIAxios(loginData)
        if (responseAPI.data.message === 'Success.'){
          history.push(`/mycourse/${responseAPI.data.data.user_id}`)
          }
        else if(responseAPI.data.message !== 'Success.'){
            throw Error('Error: Login Failed, check your credentials')
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
                  onChange={onChangeEvent} 
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