import * as React from "react";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import '../style/createTicket.css'
import { Typeahead } from 'react-bootstrap-typeahead';
import { InputApp } from "../style/InputApp";
import { LabelApp } from '../style/LabelApp'
import { ButtonApp } from '../style/ButtonApp'
import Form from 'react-bootstrap/Form';

import { fetchTicketById, createTicket } from '../store/ticket/thunks'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from "../store/user/thunks";
import { selectUsersList } from "../store/user/selectors";
import { User } from "../store/user/slice";

export const CreateTicket: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const params = useParams();
    const navigate = useNavigate()
    const usersList = useAppSelector(selectUsersList)
    const id = parseInt(params.id!)

    const [reporterName, setReporterName] = useState([] as User[])
    const [assignedToName, setAssignedToName] = useState([] as User[])
    const [subject, setSubject] = useState('')
    const [severity, setSeverity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        dispatch(fetchTicketById(id))
        dispatch(fetchUsers())
    }, [dispatch, id])


    const submitCeateTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(createTicket(reporterName[0].user_id, assignedToName[0].user_id, subject!, severity!, state!, description!))
        navigate("/tickets")
    }

    return (
        <div className="container-ticket-create">
            <h1>CREATE TICKET</h1>

            <Form className="form-container-ticket-create" onSubmit={submitCeateTicket}>

                <div className="left-ticket-create">
                    <Form.Group className="mb-3">
                        <LabelApp>Report By</LabelApp>
                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={(opts)=>setReporterName(opts as User[])}
                            options={usersList }
                            placeholder="Choose a state..."
                            selected={reporterName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <LabelApp>Assign To</LabelApp>
                        <Typeahead className="type-a-head"
                           
                            labelKey="name"
                            onChange={(opts)=>setAssignedToName(opts as User[])}
                            options={usersList }
                            placeholder="Choose a state..."
                            selected={assignedToName}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <LabelApp>Severity</LabelApp>
                        <Form.Select aria-label="Default select example" className="select" value={severity!}
                            onChange={(e) => setSeverity(e.target.value)}>
                            <option value={undefined}>Select</option>
                            <option value="Medium">Medium</option>
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