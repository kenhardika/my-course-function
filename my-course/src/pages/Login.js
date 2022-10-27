import React, { Component } from 'react';
import { withRouter } from '../high-order-comp/withRouter';

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
class Login extends Component {
    constructor(props){
        super(props);
        this.navToMyCourse = this.navToMyCourse.bind(this);
        this.state = {
            email: 'default',
            password: 'default',
            errorLogin: false,
            name: '',
            user_id:'', 
        }
    }

    navToMyCourse(linkResponse){
      // this.props.history.push(linkResponse);
      //  return <Navigate to={linkResponse} replace={true} />
      this.props.navigate(linkResponse)
    }

    onChangeEvent(e){
      e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state);
    }

    // taro handle submit di sini done
    // handleSubmit() { done
    // }
    
     // handle submit jangan di dalam render done
    handleSubmit = async (e) => {
      e.preventDefault();
      // const navigate = useNavigate();
      const responseAPI = await loginAPI(this.state);        
      // console.log(responseAPI);
      if (responseAPI.message === 'Success.'){
      // console.log(responseAPI.data.user_id);
          console.log('login success');
          localStorage.setItem("data_user_login", JSON.stringify(this.state));
         
         this.navToMyCourse(`/mycourse/${responseAPI.data.user_id}`);
          // navigate(`/mycourse/${responseAPI.data.user_id}`);
          // window.location.href = `/mycourse/${responseAPI.data.user_id}`;
      } 
      else if(responseAPI.message !== 'Success.'){
        this.setState({
            errorLogin: true
        });
        console.log('Error: login failed, API fetch failed');
        alert('Error: Login Failed');
        return 
      } 
      // ini jangan update state di dalam render done
     
    }
    render() {

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
                  onSubmit={this.handleSubmit}
                >
                  <div className="inputForm">
                    <label htmlFor="inputName">Nama Lengkap: </label>
                    <input
                      type="text"
                      id="inputName"
                      placeholder="Masukan Nama Lengkap"
                      name='name'
                      // onChange={(e) => {
                      //   this.setState({
                      //     name: e.target.value,
                      //   });
                      // }}
                      onChange={(e)=> this.onChangeEvent(e)}
                      required
                    />
                  </div>

                  <div className="inputForm">
                    <label htmlFor="inputText">Email: </label>
                    {/* onchange nya coba dibikin method done */} 
                    <input
                      type="text"
                      id="inputText"
                      placeholder="Masukan Email"
                      // ini kasih nama email done
                      name="email"
                      //   onChange={this.onChange} pakai e.target.name buat get property nya dan value nya e.target.value done
                      // onChange={(e) => {
                      //   this.setState({
                      //     email: e.target.value,
                      //   });
                      // }}
                      onChange={(e)=> this.onChangeEvent(e)}
                      required
                    />
                  </div>
                  <div className="inputForm">
                    <label htmlFor="inputPass">Kata Sandi: </label>
                    {/* onchange nya coba dibikin method done*/}
                    <input
                      type="password"
                      id="inputPass"
                      placeholder="Masukan Kata Sandi"
                      name='password'
                      //   onChange={this.onChange}
                      // onChange={(e) => {
                      //   this.setState({
                      //     password: e.target.value,
                      //   });
                      // }}
                      onChange={(e)=> this.onChangeEvent(e)}
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
}
export default withRouter(Login);       