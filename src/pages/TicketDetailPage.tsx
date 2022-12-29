import * as React from "react";
import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import { ButtonApp } from '../style/ButtonApp'
import '../style/detail.css'

import { selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById, UpdateTicketById } from '../store/ticket/thunks'
import { useAppSelector, useAppDispatch } from '../hooks'
import { createComment } from "../store/comment/thunks";
import { selectUser, selectUserAssingTo, selectUserReporterBy } from "../store/user/selectors";
import { fetchUserAssignedToById, fetchUserReporterById } from "../store/user/thunks";


export const TicketDetailPage: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const ticketById = useAppSelector(selectTicketById)
    const userLogin = useAppSelector(selectUser)
    const navigate = useNavigate()
    const params = useParams();
    const id = parseInt(params.id!)
    const comments = ticketById?.comments
    const agent = useAppSelector(selectUserAssingTo)
    const reporter =useAppSelector(selectUserReporterBy)

    const [firstNameReporter, setFirstNameReporter] = useState("")
    const [firstNameAssigned, setFirstNameAssigned] = useState("")
    const [subject, setSubject] = useState(ticketById?.state)
    const [severity, setSeverity] = useState(ticketById?.severity)
    const [state, setState] = useState(ticketById?.state)
    const [description, setDescription] = useState(ticketById?.description)
    const [comment, setComment] = useState("")


    useEffect(() => {
        dispatch(fetchTicketById(id))
    }, [])

    useEffect(() => {
        setFirstNameAssigned(agent?.name!)
        setFirstNameReporter(reporter?.name!)
    }, [agent, reporter])


    useEffect(() => {
        
        setSubject(ticketById?.subject)
        setSeverity(ticketById?.severity)
        setState(ticketById?.state)
        setDescription(ticketById?.description)

        dispatch(fetchUserAssignedToById(ticketById?.assignedTo!))
        dispatch(fetchUserReporterById(ticketById?.reportedBy!))
        
    }, [ticketById])

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      await  dispatch(UpdateTicketById(id, subject!, severity!, state!, description!))
      navigate("/tickets")
    }

    const addComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createComment(id!, comment, userLogin?.user_id! ))
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
                        <InputApp readOnly type="text" placeholder="Enter name" value={firstNameAssigned} />
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
                        <textarea rows={5} className="text-area" placeholder="Enter email" value={description!}
                            onChange={(e) => setDescription(e.target.value!)} />
                    </Form.Group>

                    <ButtonApp primary type="submit">
                        Save
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
                })}

                <Form onSubmit={addComment}>
                    <textarea className="text-area" value={comment}  onChange={(e) => setComment(e.target.value)} ></textarea>
                    <ButtonApp type="submit" primary='true'>Add Comment</ButtonApp>
                </Form>

            </div>


        </div>
    )
}