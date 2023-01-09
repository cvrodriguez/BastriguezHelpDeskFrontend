import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Typeahead } from 'react-bootstrap-typeahead';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import { ButtonApp } from '../style/ButtonApp'
import '../style/detail.css'

import { User } from "../store/user/slice";
import { selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById, UpdateTicketById } from '../store/ticket/thunks'
import { useAppSelector, useAppDispatch } from '../hooks'
import { createComment } from "../store/comment/thunks";
import { selectUser, selectUsersList } from "../store/user/selectors";
import { fetchUsers, fetchUserAssignedToById, fetchUserReporterById } from "../store/user/thunks";


export const TicketDetailPage: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const params = useParams();

    const id = parseInt(params.id!)
    const userLogin = useAppSelector(selectUser)
    const ticketById = useAppSelector(selectTicketById)
    const usersList = useAppSelector(selectUsersList)
    const comments = ticketById?.comments

    const [nameReportedBy, setNameReportedBy] = useState([] as User[] )
    const [nameAssignedTo, setNameAssignedTo] = useState([]as User[])
    const [subject, setSubject] = useState(ticketById?.state)
    const [severity, setSeverity] = useState(ticketById?.severity)
    const [state, setState] = useState(ticketById?.state)
    const [description, setDescription] = useState(ticketById?.description)
    const [comment, setComment] = useState("")


    useEffect(() => {
        dispatch(fetchTicketById(id))
        dispatch(fetchUsers())
    }, [dispatch, id])

    useEffect(() => {

        setSubject(ticketById?.subject)
        setSeverity(ticketById?.severity)
        setState(ticketById?.state)
        setDescription(ticketById?.description)

        dispatch(fetchUserAssignedToById(ticketById?.assignedTo!))
        dispatch(fetchUserReporterById(ticketById?.reportedBy!))

    }, [dispatch, ticketById])

    useEffect(() => {
        setNameReportedBy(usersList.filter((u)=> u.user_id === ticketById?.reportedBy))
        setNameAssignedTo(usersList.filter((u)=> u.user_id === ticketById?.assignedTo))
    }, [ticketById?.assignedTo, ticketById?.reportedBy, usersList])

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(UpdateTicketById(id, nameAssignedTo[0].user_id, nameReportedBy[0].user_id, subject!, severity!, state!, description!))
        navigate("/tickets")
    }

    const addComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createComment(id!, comment, userLogin?.user_id!))
    }

    return (
        <div className="container">

            {ticketById &&
                <Form className="form-container" onSubmit={submitForm}>
                    <Form.Group className="mb-3">
                        <LabelApp>Report By</LabelApp>
                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={(opts)=>setNameReportedBy(opts as User[])}
                            options={usersList}
                            placeholder="Choose a user..."
                            selected={nameReportedBy}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Assign To</LabelApp>
                        <LabelApp>Report By</LabelApp>
                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={(opts)=>setNameAssignedTo(opts as User[])}
                            options={usersList}
                            placeholder="Choose a user..."
                            selected={nameAssignedTo}
                        />
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
                            <option value="Medium">Medium</option>
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
                    <textarea className="text-area" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
                    <ButtonApp type="submit" primary='true'>Add Comment</ButtonApp>
                </Form>

            </div>


        </div>
    )
}