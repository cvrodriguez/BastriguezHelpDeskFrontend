import * as React from "react";
import { FiPlus } from "react-icons/fi";
import { ButtonApp } from "../style/ButtonApp";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const BarButtosComponent: React.FC<{}> = () => {
    
    const navigate = useNavigate()
    const goToCreateTicket = ()=>{
        navigate("/createTicket")
    }
    return(
        <StyleButtonsBar >
            <div>
                <ButtonApp onClick={goToCreateTicket}  primary> <FiPlus/>Add Ticket</ButtonApp>
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
    padding: 20px;
    border-radius: 20px;
}
.main-bar-buttons-right{
    display: flex;
    gap: 10px;
}


`

// FiPlus
// MdOutlineAddCircle