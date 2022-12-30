import * as React from "react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from '../hooks'
import {selectUserById, selectUsersList } from "../store/user/selectors";
import { fetchUsers, fetchUserById } from "../store/user/thunks";

import { BarButtosComponent } from "./BarButtosComponent";

import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

export const AgentstListComponent: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsersList)
    const user = useAppSelector(selectUserById)

    const userDetail = (id:string) =>{
        dispatch(fetchUserById(id))
    }
   
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    
    return (
        <div>
            <BarButtosComponent></BarButtosComponent>
            <Container>
                <TableContainer hover >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => {
                            return (
                                <tr key={u.email} onClick={() => userDetail(u.user_id)} >
                                    <td>{u.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </TableContainer>

                {user ? <StyleCard>
                    <StyleCardHeader>
                        <ImagePefil alt="" src={user.picture} roundedCircle ></ImagePefil>
                        {user.name }</StyleCardHeader>
                    <StyleCardBody className="card-body">
                        <Card.Title></Card.Title>
                        <Card.Text>
                            { user.email}
                        </Card.Text>
                    </StyleCardBody>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </StyleCard>
                    :
                    <StyleCard className="text-center">
                        <StyleCardHeader>
                            <ImagePefil alt="" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle ></ImagePefil>Report By User
                        </StyleCardHeader>
                        <StyleCardBody>
                            <Card.Title>Subject</Card.Title>
                            <Card.Text>
                                Description
                            </Card.Text>
                        </StyleCardBody>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </StyleCard>
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
background-color: white;`

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