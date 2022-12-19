import * as React from "react";
import { Outlet} from "react-router-dom";
import styled from "styled-components";
import {NavBarComponent} from "../components";



export const HomePage: React.FC<{}> = () => {

    return (
        <div>
            <NavBarComponent></NavBarComponent>
            <Container> <Outlet/></Container>

        </div>
    )


}

const Container  = styled.div`
{
    background-color: white;
    border-radius: 25px;
}
`

