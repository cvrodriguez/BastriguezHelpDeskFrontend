import * as React from "react";
import { useEffect, useState } from "react";

import moment from 'moment';

import { useAppSelector, useAppDispatch } from '../hooks'
import { selectTicketById, selectFilterTicketsList } from '../store/ticket/slectors'
import { fetchTicketById, FetchTicketsByFilters as fetchTicketsByFilters } from '../store/ticket/thunks'
import { fetchUserAssignedToById, fetchUserReporterById } from "../store/user/thunks";
import { selectUserAssingTo, selectUserReporterBy } from "../store/user/selectors";

import { BarButtosComponent } from "./BarButtosComponent";

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { LinkApp } from "../style/LinkApp";
import { LabelApp } from "../style/LabelApp";


export const TickestListComponent: React.FC<{}> = () => {

    const tickestfilte = useAppSelector(selectFilterTicketsList)
    const ticketById = useAppSelector(selectTicketById)
    const agent = useAppSelector(selectUserAssingTo)
    const reporter = useAppSelector(selectUserReporterBy)
    const dispatch = useAppDispatch()

    const [state, setState] = useState('')
    const [severity, setSeverity] = useState('')

    const ticketDetail = (id: number) => {
        dispatch(fetchTicketById(id))
    }

    useEffect(() => {
        dispatch(fetchUserAssignedToById(ticketById?.assignedTo!))
        dispatch(fetchUserReporterById(ticketById?.reportedBy!))
    }, [ticketById, dispatch])

    useEffect(() => {
        dispatch(fetchTicketsByFilters(severity, state))
    }, [state, severity, dispatch])

    return (
        <div>
            <BarButtosComponent></BarButtosComponent>

            <Container>
                <TableContainer hover >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>
                                <Form.Select aria-label="Default select example" style={{ fontWeight: 'bold', fontFamily: '16px', border: 0, color: '#212529' }}
                                    onChange={(e) => setSeverity(e.target.value)} className="select" value={severity} >
                                    <option value={''}>Severity...</option>
                                    <option value="Low">Low</option>
                                    <option value="Medio">Medio</option>
                                    <option value="High">High</option>
                                </Form.Select>
                            </th>
                            <th>
                                <Form.Select aria-label="Default select example" style={{ fontWeight: 'bold', fontFamily: '16px', border: 0, color: '#212529' }}
                                    onChange={(e) => setState(e.target.value)} className="select" value={state} >
                                    <option value={''}>State...</option>
                                    <option value="Open">Open</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Closed">Closed</option>
                                </Form.Select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickestfilte.map((t) => {
                            return (
                                <tr key={t.id} onClick={() => ticketDetail(t.id)}>
                                    <td>{t.subject}</td>
                                    <td>{t.severity}</td>
                                    <td>{t.state}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </TableContainer>

                {ticketById ?
                    <StyleCard>
                        <StyleCardHeader>
                            <ImagePefil alt="" src={agent?.picture} roundedCircle ></ImagePefil>
                            <LabelApp>Agent:</LabelApp>
                            {agent == null ? 'loading...' : agent?.name}</StyleCardHeader>
                        <StyleCardBody className="card-body mt-3 ">
                            <span>Reporter</span>
                            <Card.Subtitle className="mb-2 text-muted">{reporter === null ? 'Loading...' : reporter.name}</Card.Subtitle>
                            <span>Subject</span>
                            <Card.Subtitle className="mb-2 text-muted">{ticketById.subject}</Card.Subtitle>
                            <Card.Title className="mt-3 mb-3 ">{ticketById.description}</Card.Title>
                            <LinkApp to={`/ticket_detail/${ticketById.id}`}>Detail</LinkApp>
                        </StyleCardBody>
                        <Card.Footer className="text-muted">{moment(ticketById.createdAt).fromNow()}</Card.Footer>
                    </StyleCard>
                    :
                    <Blank></Blank>
                }
            </Container>
        </div>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-around;
padding: 10px 10px 50px 10px;
`

const TableContainer = styled(Table)`
width: 40%;
text-align: left;
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
const Blank = styled.div`
{
    width: 40%;
}
`
