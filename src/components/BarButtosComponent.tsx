import * as React from "react";
import { FiPlus } from "react-icons/fi";
import { Button } from "react-bootstrap";
import { ButtonApp } from "../style/ButtonApp";
import styled from "styled-components";


export const BarButtosComponent: React.FC<{}> = () => {
    return(
        <StyleButtonsBar >
            <div>
                <ButtonApp  primary> <FiPlus/>Add User</ButtonApp>
            </div>
            <div className="main-bar-buttons-right">
            <ButtonApp > <FiPlus/>Export Data</ButtonApp>
            <ButtonApp > <FiPlus/>Sort By</ButtonApp>
            </div>
        </StyleButtonsBar>
    )
}

const StyleButtonsBar = styled.div`
{
    background-color: white;
    display:  flex;
    justify-content: space-between;
    padding-bottom: 20px;
   
}
.main-bar-buttons-right{
    display: flex;
    gap: 10px;
}


`

// FiPlus
// MdOutlineAddCircle