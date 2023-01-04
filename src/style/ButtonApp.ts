import styled from "styled-components"
import { Button } from "react-bootstrap";


interface ButtonProps {
    readonly primary: boolean;
}

export const ButtonApp = styled(Button) <ButtonProps>`

{  
    color: #D7D7D9;
    background-color: ${(props) => (props.primary ? '#A66B56' : '#133340')};
    border: none;
    cursor: pointer;
}

&:hover{
    background-color: ${(props) => (props.primary ? '#133340' : '#A66B56')};
    color: #D7D7D9;
}

`


