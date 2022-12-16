import * as React from "react";
import Image from "react-bootstrap/Image";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './BannerComponent.css'

const BannerComponent: React.FC<{}> = () => {


    return (
        <div className="banner-page">
            <div className="left-side">
                <h1 style={{color:"#A66B56"}}>Welcome back,Matthew</h1>
                <span style={{color:"#D7D7D9"}}>Haz lo que puedas, con lo que tienes, dónde estás</span>
            </div>
            <div className="right-side">
                <i className="fa fa-google fa-fw"></i>
                <Image className="perfil" src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZmlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" roundedCircle></Image>

           
                    <DropdownButton className="perfil-action"
                      
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
    )

}

export default BannerComponent;