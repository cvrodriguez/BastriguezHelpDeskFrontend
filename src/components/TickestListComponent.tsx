import * as React from "react";
import { useEffect } from "react";


import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTickets, selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById, fetchTickets } from '../store/ticket/thunks'
import { BarButtosComponent } from "./BarButtosComponent";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";

import '../style/table.css'

export const TickestListComponent: React.FC<{}> = () => {

    const tickets = useAppSelector(selectTickets)
    const ticketById = useAppSelector(selectTicketById)
    console.log(ticketById, "lllll")
    const dispatch = useAppDispatch()

    const ticketDetail = (id: number) => {

        dispatch(fetchTicketById(id))
    }

    useEffect(() => {
        dispatch(fetchTickets())

    }, [])

    return (
        
            
            <div className="main-page-container">
                <div>
                <BarButtosComponent></BarButtosComponent>
                </div>
            


                <div className="container-of-table-detail">

                    <Table hover className="table-section">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>

                            {tickets.map((t) => {

                                return (
                                    <tr key={t.id} onClick={() => ticketDetail(t.id)}>
                                        <td>{t.subject}</td>
                                        <td>{t.assignedTo}</td>
                                        <td>{t.state}</td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </Table>

                    <div>
                    {ticketById ?
                        <div className="card">
                            <Card className="text-center">
                                <Card.Header className="card-header">
                                    <Image className="perfil" alt="" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle ></Image>
                                    {`${ticketById.reporter.firstName}, ${ticketById.reporter.lastName}`}</Card.Header>
                                <Card.Body className="card-body">
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        {ticketById.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </div> :
                        <Card className="text-center">
                            <Card.Header className="card-header">
                                <Image className="perfil" alt="" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle ></Image>Report By User
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Subject</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    }
                    </div>
                </div>

            </div>

    



    )
}
