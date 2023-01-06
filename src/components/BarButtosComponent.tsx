import * as React from "react";
import { FiPlus } from "react-icons/fi";
import { ButtonApp } from "../style/ButtonApp";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


export const BarButtosComponent: React.FC<{}> = () => {
    
    const location = useLocation();
    const navigate = useNavigate()
    
    const goToCreateTicket = () => {
        navigate("/createTicket")
    }

    const goToCreateuser = () => {
        navigate("/createUser")
    }
    

    return (
        <StyleButtonsBar >
            <div>
                {(location.pathname === '/tickets' || location.pathname === '/') 
                   && <ButtonApp onClick={goToCreateTicket} primary> <FiPlus />Add Ticket</ButtonApp> }

                {location.pathname === '/agents' 
                    && <ButtonApp onClick={goToCreateuser} primary> <FiPlus />Add user</ButtonApp>}
            </div>
            <div className="main-bar-buttons-right">
                <ButtonApp > <FiPlus />Export Data</ButtonApp>
                <ButtonApp > <FiPlus />Sort By</ButtonApp>
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