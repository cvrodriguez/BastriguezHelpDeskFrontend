import * as React from "react";
import { useState } from "react";

import '../style/side-bar.css'
import { MdArrowForward, MdArrowBack, MdDateRange, MdChat, MdNoteAdd } from "react-icons/md";
import { ButtonApp } from "../style/ButtonApp";
import styled from "styled-components";


export const SideBarComponent: React.FC<{}> = () => {

    const [sideBar, setSideBar] = useState(false);
    const handleChangeSideBar = () => setSideBar((prevState) => !prevState);

    return (
        <div className="bar-side-page">
            {!sideBar ? (

                <div className="closed-bar-side">
                  <ButtonApp className="btn"><MdNoteAdd/></ButtonApp>
                    <ButtonApp><MdChat/></ButtonApp>
                    <ButtonApp className="btn"><MdDateRange/></ButtonApp>

                    <StyleSideBarButtonCloseAndOpen onClick={handleChangeSideBar}>
                        <MdArrowForward />
                    </StyleSideBarButtonCloseAndOpen>
                </div>
            ) : (

                <div className="opened-bar-side">

                    <StyleSideBarButton className="btn"><MdNoteAdd/>Notes</StyleSideBarButton>
                    <StyleSideBarButton className="btn"><MdChat/>Message</StyleSideBarButton>
                    <StyleSideBarButton className="btn"><MdDateRange/>Calendar</StyleSideBarButton>

                    <StyleSideBarButtonCloseAndOpen onClick={handleChangeSideBar}>
                        <MdArrowBack />
                    </StyleSideBarButtonCloseAndOpen>
                </div>)}
        </div>
    );
}

const StyleSideBarButton = styled(ButtonApp)`
width: 120px
`

const StyleSideBarButtonCloseAndOpen = styled(ButtonApp)`
align-self: flex-end;
`