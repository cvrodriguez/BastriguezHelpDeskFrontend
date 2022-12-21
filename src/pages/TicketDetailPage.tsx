import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../style/detail.css'

import { selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById, UpdateTicketById } from '../store/ticket/thunks'
import { useAppSelector, useAppDispatch } from '../hooks'
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import { ButtonApp } from '../style/ButtonApp'

export const TicketDetailPage: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const ticketById = useAppSelector(selectTicketById)

    const params = useParams();
    const id = parseInt(params.id!)
    const comments = ticketById?.comments

    const [firstNameReporter, setFirstNameReporter] = useState(ticketById?.reporter.firstName)
    const [firstNameAssigned, setFirstNameAssigned] = useState(ticketById?.assigned.firstName)
    const [subject, setSubject] = useState(ticketById?.state)
    const [severity, setSeverity] = useState(ticketById?.severity)
    const [state, setState] = useState(ticketById?.state)
    const [description, setDescription] = useState(ticketById?.description)


    useEffect(() => {
        dispatch(fetchTicketById(id))
    }, [])

    useEffect(() => {
        setFirstNameReporter(ticketById?.reporter.lastName)
        setFirstNameAssigned(ticketById?.assigned.firstName)
        setSubject(ticketById?.subject)
        setSeverity(ticketById?.severity)
        setState(ticketById?.state)
        setDescription(ticketById?.description)
    }, [ticketById])


    const submitForm = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(UpdateTicketById(id, subject!, severity!, state!, description!))
    }
    return (
        <div className="container">

            {ticketById &&
                <Form className="form-container" onSubmit={submitForm}>
                    <Form.Group className="mb-3">
                        <LabelApp>Report By</LabelApp>
                        <InputApp readOnly type="text" placeholder="Enter name" value={firstNameReporter!} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Assign To</LabelApp>
                        <InputApp readOnly type="text" placeholder="Enter name" value={firstNameAssigned!} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Subject</LabelApp>
                        <InputApp type="text" placeholder="Enter subject" value={subject!}
                            onChange={(e) => setSubject(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Severity</LabelApp>
                        <Form.Select aria-label="Default select example" className="select" value={severity!}
                            onChange={(e) => setSeverity(e.target.value)}>
                            <option value="Medio">Medio</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>State</LabelApp>
                        <Form.Select className="select" onChange={(e) => setState(e.target.value)} >
                            <option value="Pending">Pending</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Description</LabelApp>
                        <textarea rows={5} className="text-area"  placeholder="Enter email" value={description!}
                       onChange={(e) => setDescription(e.target.value!)}  />
                    </Form.Group>

                    <ButtonApp type="submit">
                        Submit
                    </ButtonApp>
                </Form>
            }
            <div className="card-container">
                {comments && comments.map((c) => {
                    return (
                        <Card key={c.id} className="card" >
                            <Card.Body className="card-body" >
                                <Card.Title></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <Card.Text>{c.comment}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
                }
            </div>


        </div>
    )
}