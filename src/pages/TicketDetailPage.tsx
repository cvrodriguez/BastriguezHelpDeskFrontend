import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/detail.css'

import { selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById } from '../store/ticket/thunks'
import { useAppSelector, useAppDispatch } from '../hooks'

export const TicketDetailPage: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const ticketById = useAppSelector(selectTicketById)
    const params = useParams();
    const id = parseInt(params.id!)

    useEffect(() => {
        dispatch(fetchTicketById(id))

    }, [])

    return (
        <div className="container">
            {ticketById && <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Report By</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={ticketById.reporter.firstName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Assign To</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={ticketById.assigned.firstName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={ticketById.subject} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter email" value={ticketById.description} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select aria-label="Default select example">
                        <option>Severity</option>
                        <option value={ticketById.severity}>Medio</option>
                        <option value={ticketById.severity}>Low</option>
                        <option value={ticketById.severity}>Hight</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select aria-label="Default select example">
                        <option>State</option>
                        <option value={ticketById.state}>Pending</option>
                        <option value={ticketById.state}>Open</option>
                        <option value={ticketById.state}>Closed</option>
                    </Form.Select>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>}

        </div>
    )
}