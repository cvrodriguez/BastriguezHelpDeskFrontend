import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import { InputApp } from "../style/InputApp";
import { ButtonApp } from '../style/ButtonApp'
import { CreateUser } from "../store/user/thunks";
import { useAppDispatch } from "../hooks";


export const CreateUserPage: React.FC<{}> = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const [picture, setPicture] = useState('')


    const submitCeateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(CreateUser(email ,password,fullName, name, lastName, nickname, picture ))
        navigate("/agents")
    }
    return (
        <div>
            <Form className="form-container-ticket-create" onSubmit={submitCeateUser}>

                <div className="left-ticket-create">
                    <Form.Group className="mb-3">
                        <InputApp
                            id="basic-typeahead-single"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            value={name}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <InputApp className="type-a-head"
                            onChange={(e) => setLastName(e.target.value) }
                            value={lastName}
                            placeholder="Last Name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <InputApp onChange={(e)=> setFullName(e.target.value)}
                        value={fullName}
                        placeholder="Full Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                       
                       <InputApp type="email" placeholder="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required/>
                   </Form.Group>

                   <Form.Group className="mb-3" >
                       <InputApp  placeholder="Enter password" value={password}
                           onChange={(e) => setPassword(e.target.value!)} required />
                   </Form.Group>

                   <Form.Group className="mb-3" >
                       <InputApp  placeholder="Enter nickname" value={nickname}
                           onChange={(e) => setNickname(e.target.value)}  />
                   </Form.Group>

                   <Form.Group className="mb-3" >
                       <InputApp  placeholder="Enter URL picture" value={picture}
                           onChange={(e) => setPicture(e.target.value!)}  />
                   </Form.Group>

                   <ButtonApp primary type="submit">
                       Save
                   </ButtonApp>
                </div>

            </Form>

        </div>
    )
}