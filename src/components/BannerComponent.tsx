import * as React from "react";
import Image from "react-bootstrap/Image";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../style/banner-component.css'
import styled from "styled-components";

export const BannerComponent: React.FC<{}> = () => {


    return (
        <StyledBanner>
        <div className="banner-page">
            <div className="left-side">
                <h1 style={{color:"#A66B56"}}>Welcome back,Matthew</h1>
                <span style={{color:"#D7D7D9"}}>Haz lo que puedas, con lo que tienes, dónde estás</span>
            </div>
            <div className="right-side">
                <i className="fa fa-google fa-fw"></i>
                <Image className="perfil" src="https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" roundedCircle></Image>

           
                    <DropdownButton className=""
                        title="Matthew Parker"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    
            
            </div>
        </div>
            </StyledBanner>
    )

}

 const StyledBanner = styled.div`
 .btn {
    background-color: #133340;
    color: #D7D7D9;

}

.btn:hover{
    background-color: #A66B56;
    color: #D7D7D9;
}


 `