import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTickets, selectTicketById } from '../store/ticket/slectors'
import { fetchTicketById, fetchTickets } from '../store/ticket/thunks'
import { BarButtosComponent } from "./BarButtosComponent";

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Image from "react-bootstrap/Image";
import styled from "styled-components";



export const TickestListComponent: React.FC<{}> = () => {

    const tickets = useAppSelector(selectTickets)
    const ticketById = useAppSelector(selectTicketById)
  
    const dispatch = useAppDispatch()

    const ticketDetail = (id: number) => {
        dispatch(fetchTicketById(id))
    }

    useEffect(() => {
        dispatch(fetchTickets())

    }, [])

    return (

        <div>
            <BarButtosComponent></BarButtosComponent>

            <Container className="container-of-table-detail">

                <TableContainer hover >
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

                </TableContainer>

                    {ticketById ?
                        <StyleCard>
                            <StyleCardHeader className="card-header">
                                <ImagePefil  alt="" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle ></ImagePefil>
                                {`${ticketById.reporter.firstName}, ${ticketById.reporter.lastName}`}</StyleCardHeader>
                            <StyleCardBody className="card-body">
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    {ticketById.description}
                                </Card.Text>
                                <Link to="/ticket_detail">Detail</Link>
                            </StyleCardBody>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </StyleCard>
                        :
                        <StyleCard className="text-center">
                            <StyleCardHeader className="card-header">
                                <ImagePefil  alt="" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle ></ImagePefil>Report By User
                            </StyleCardHeader>
                            <StyleCardBody>
                                <Card.Title>Subject</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                {/* <Button>Go somewhere</Button> */}
                            </StyleCardBody>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </StyleCard>
                    }
                </Container>
            </div>
    )
}

const Container = styled.div`
padding: 10px;
display: flex;
justify-content: space-around;
`

const TableContainer = styled(Table)`
width: 40%;
background-color: white;
`

const StyleCard = styled(Card)`
width: 40%;
border-radius: 10px;
box-shadow: -5px 8px 20px 4px rgba(0, 0, 0, 0.53);
-webkit-box-shadow: -5px 8px 20px 4px rgba(0, 0, 0, 0.53);
-moz-box-shadow: -5px 8px 20px 4px rgba(0, 0, 0, 0.53);
`
const StyleCardHeader = styled(Card.Header)`
{
    background-color: #18778C;
    display: flex;
    align-items: center;
    gap: 30px;
    color: aliceblue;
}
`

const StyleCardBody = styled(Card.Body)`
{
    width: 100%;
}
`
const ImagePefil = styled(Image)`
{
    width: 60px;
    height: 60px;
}`

