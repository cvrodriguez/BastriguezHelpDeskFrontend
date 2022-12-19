import * as React from "react";
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import {selectToken} from '../store/user/selectors'
import { useNavigate, Link } from "react-router-dom"


import { fetchUser } from '../store/user/thunks'

import Form from 'react-bootstrap/Form';
// import '../style/login.css'
import styled from "styled-components";

export const LoginPage: React.FC<{}> = () => {
    const dispatch = useAppDispatch()

    const token = useAppSelector(selectToken)
    const navigate = useNavigate()
  

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchUser(email, password))
        //dispatch(login(email, password))
    }

    useEffect(()=>{
        if (token !== null) {
            navigate("/");
          }
        
    },[token, navigate])
   

    return (
        <LoginPageStyles>
            <div className="login-container">
                <h1 className="title-login">Welcome back</h1>
                <span style={{ color: "#D7D7D9" }}>Please enter your credencials</span>


                <Form onSubmit={submitForm} className="form-login">
                    <div className="input-container">
                        <input type="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label style={{ color: "#133340" }}>Email</label>
                    </div>
                    <div className="input-container">
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label style={{ color: "#133340" }}>Password</label>
                    </div>
                    <button type="submit" className="btn">Log in</button>
                </Form>

                <div className="btns-extra-login">
                    <div>
                        <button className="extra-login-btn fb-btn">
                            <i className="fa fa-facebook fa-fw">
                            </i> Login with Facebook
                        </button>
                    </div>
                    <div>
                        <button className="google btn">
                            <i className="fa fa-google fa-fw">
                            </i> Login with Google+
                        </button>
                    </div>
                </div>

                <div className="sign-up">
                    <span style={{ color: "#D7D7D9" }}>Don't have an account? <br />
                        <Link to="/signup">Sign Up for free</Link>
                    </span>
                </div>

            </div>

        </LoginPageStyles>
    )

}

const LoginPageStyles = styled.div`
{
    width: 100%;
    height: 1000px;
    align-items: center;
    display: flex;
    background-image: url('https://acegif.com/wp-content/uploads/gif/outerspace-53.gif');
    background-size: cover;
    background-attachment: fixed;
}

.title-login {
    color: #A66B56;
    margin-top: 30px;

}

.login-container {
    width: 400px;
    height: 800px;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;
    box-shadow:
        rgba(153, 193, 219, 1) 0px 50px 100px -20px,
        rgba(153, 193, 219, 1) 0px 30px 60px -30px,
        rgba(153, 193, 219, 1) 0px -2px 6px 0px inset;
}

.form-login {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;


}

.input-container {
    display: flex;
    justify-content: center;
    width: 70%;
    position: relative;
    margin-bottom: 25px;
}

.input-container label {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 16px;
    color: #fff;
    pointer-event: none;
    transition: all 0.5s ease-in-out;
}

.input-container input {
    border: 0;
    border-bottom: 1px solid #D7D7D9;
    background: transparent;
    width: 100%;
    padding: 8px 0 5px 0;
    font-size: 16px;
    color: #fff;
}

.input-container input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #A66B56;
}

.btn {
    background-color: #133340;
    color: #D7D7D9;
    width: 70%;
}

.btn:hover{
    background-color: #A66B56;
    color: #D7D7D9;
}

.extra-login-btn {
    
    width: 70%;
    padding: 12px;
    border: none;
    border-radius: 4px;
   margin-top: 90px;
   margin-bottom: 10px;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    /* remove underline from anchors */
    
    color: white;
}
.fb-btn{
    background-color: #3B5998;
}

.fb-btn:hover {
    opacity: 1;
    color: white;
}
.google {
    background-color: #dd4b39;
    color: white;
  }

  .sign-up{
    margin-top: 30px;
  }
`