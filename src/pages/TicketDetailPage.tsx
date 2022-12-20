import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../style/detail.css'

import { selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById } from '../store/ticket/thunks'
import { useAppSelector, useAppDispatch } from '../hooks'
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import {ButtonApp} from '../style/ButtonApp'

export const TicketDetailPage: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const ticketById = useAppSelector(selectTicketById)

    const params = useParams();
    const id = parseInt(params.id!)
    const comments = ticketById && ticketById.comments


    useEffect(() => {
        dispatch(fetchTicketById(id))

    }, [])

    return (
        <div className="container">

            {ticketById &&

                <Form className="form-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <LabelApp>Report By</LabelApp>
                        <InputApp type="text" placeholder="Enter email" value={ticketById.reporter.firstName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <LabelApp>Assign To</LabelApp>
                        <InputApp type="text" placeholder="Enter email" value={ticketById.assigned.firstName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <LabelApp>Subject</LabelApp>
                        <InputApp type="text" placeholder="Enter email" value={ticketById.subject} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <LabelApp>Severity</LabelApp>
                        <Form.Select aria-label="Default select example" className="select">
                            <option value={ticketById.severity}>Medio</option>
                            <option value={ticketById.severity}>Low</option>
                            <option value={ticketById.severity}>Hight</option>
                        </Form.Select>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <LabelApp>State</LabelApp>
                        <Form.Select  className="select" >
                            <option value={ticketById.state}>Pending</option>
                            <option value={ticketById.state}>Open</option>
                            <option value={ticketById.state}>Closed</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <LabelApp>Description</LabelApp>
                        <InputApp as="textarea" rows={4} placeholder="Enter email" value={ticketById.description} />
                    </Form.Group>


                    <ButtonApp primary type="submit">
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