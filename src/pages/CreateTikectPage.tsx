import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import '../style/createTicket.css'
import { fetchTicketById, createTicket } from '../store/ticket/thunks'
import { useAppDispatch } from '../hooks'
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import { ButtonApp } from '../style/ButtonApp'

import { useNavigate } from "react-router-dom";

export const CreateTicket: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const params = useParams();
    const navigate = useNavigate()
    const id = parseInt(params.id!)

    const [firstNameReporter, setFirstNameReporter] = useState(0)
    const [firstNameAssigned, setFirstNameAssigned] = useState(0)
    const [subject, setSubject] = useState('')
    const [severity, setSeverity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        dispatch(fetchTicketById(id))
    }, [])


    const submitCeateTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       await dispatch(createTicket(firstNameReporter, firstNameAssigned, subject!, severity!, state!, description!))
       navigate("/tickets")
    }

    return (
        <div className="container-ticket-create">
            <h1>CREATE TICKET</h1>

            <Form className="form-container-ticket-create" onSubmit={submitCeateTicket}>

                <div className="left-ticket-create">
                    <Form.Group className="mb-3">
                        <LabelApp>Report By</LabelApp>
                        <InputApp type="number" placeholder="Enter name" value={firstNameReporter!}
                            onChange={(e) => setFirstNameReporter(parseInt(e.target.value))} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Assign To</LabelApp>
                        <InputApp type="number" placeholder="Enter name" value={firstNameAssigned!}
                            onChange={(e) => setFirstNameAssigned(parseInt(e.target.value))} />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <LabelApp>Severity</LabelApp>
                        <Form.Select aria-label="Default select example" className="select" value={severity!}
                            onChange={(e) => setSeverity(e.target.value)}>
                            <option value={undefined}>Select</option>
                            <option value="Medio">Medio</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>State</LabelApp>
                        <select className="select" onChange={(e) => setState(e.target.value)} required>
                            <option value={undefined}>Select</option>
                            <option value="Pending">Pending</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </Form.Group>

                </div>

                <div className="right-ticket-create">
                    <Form.Group className="mb-3" >
                        <LabelApp>Subject</LabelApp>
                        <InputApp type="text" placeholder="Enter subject" value={subject!}
                            onChange={(e) => setSubject(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Description</LabelApp>
                        <textarea rows={5} className="text-area" placeholder="Enter description" value={description!}
                            onChange={(e) => setDescription(e.target.value!)} required />
                    </Form.Group>

                    <ButtonApp primary type="submit">
                        Save
                    </ButtonApp>
                </div>

            </Form>

        </div>
    )
}