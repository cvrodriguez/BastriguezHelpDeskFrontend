import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Image from "react-bootstrap/Image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { selectUser } from '../store/user/selectors'

import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { ButtonApp } from "../style/ButtonApp";
import { LinkApp } from "../style/LinkApp";


export const BannerComponent: React.FC<{}> = () => {

    const user = useAppSelector(selectUser)
    const { logout } = useAuth0();

    return (
        <div>
            {user && (<StyledBanner>

                <div className="left-side">
                   <LinkApp to={"/"} style={{display: "block"}}>
                   <h1 style={{ color: "#A66B56" }}>Welcome back, {user.given_name}</h1></LinkApp>  
                   
                    <span style={{ color: "#D7D7D9" }}>Haz lo que puedas, con lo que tienes, dónde estás</span>
                </div>
                <div className="right-side">
                    <Image className="perfil" src={user?.picture} roundedCircle></Image>

                    <DropdownButton className=""
                        title={user?.name}
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Settings</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">
                            <ButtonApp   onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </ButtonApp>
                        </Dropdown.Item>
                    </DropdownButton>



                </div>
            </StyledBanner>)}


        </div>

    )

}

const StyledBanner = styled.div`

 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25vh;
    background-image: url('https://acegif.com/wp-content/uploads/gif/outerspace-53.gif');
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-box-shadow: 10px 10px 36px 14px rgba(0,0,0,0.41);
    -moz-box-shadow: 10px 10px 36px 14px rgba(0,0,0,0.41);
    box-shadow: 10px 10px 36px 14px rgba(0,0,0,0.41);
    
}

.left-side{
    width: 60%;
    text-align: center;
}

.right-side{
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-right: 40px;
}

.perfil-action .btn{
    width: 100%;
    background-color: none;
    border: none;
}

.perfil{
    width: 100px;
    height: 100px;
}

.btn{
    background-color: #133340;
    color: #D7D7D9;
    border: none;
}

.btn:hover{
    background-color: #A66B56;
    color: #D7D7D9;
    border: none;
}

 `