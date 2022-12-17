import * as React from "react";
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import {selectToken} from '../store/user/selectors'
import { useNavigate, Link } from "react-router-dom"


import { fetchUser } from '../store/user/thunks'

import Form from 'react-bootstrap/Form';
import '../style/login.css'

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
        <div className="login-page">
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

        </div>
    )

}

