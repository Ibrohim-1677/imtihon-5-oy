import siteLogo from "./site-logo.svg"
import "./sign-in.css"
import { useRef, useState } from "react";
import { useAuth } from "../../../hook/useAuth";

const SignIN = () =>{
  const { setToken } = useAuth()
  const [error, setError] =useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handeleLogin = async (evt) =>{
    evt.preventDefault();
    const data ={
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const res = await fetch('https://reqres.in/api/login' , {
      method: `POST`,
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(data), 
    })
    if (res.ok) {
      setToken(data);
    }else{
      setError(true)
    }
    };
  return(
    <>
    <div className="container">
    <a href="/"><img src={siteLogo} alt="site logo" /></a>
    <div className="form-box">
      <div>
      <h2 className="signin-title">Login</h2>
      <div className="alert">Email: eve.holt@reqres.in
           <br className="br" />
           Password: cityslicka
      </div>
      <form className="form" onSubmit={handeleLogin}>
          <input className={`form-input ${error ? "header-error" :""}`} ref={emailRef} required placeholder="Login" type="email" />
          <input className={`form-input ${error ? "header-error" :""}`} ref={passwordRef} required placeholder="Password" type="password" />
          <span className={`alerts ${error ? "header-alert" :""}`}> email or password  not found</span>
        <button className="form-button">Submit</button>
      </form>
      </div>
    </div>
    </div>
    </>
  )
};

export default SignIN