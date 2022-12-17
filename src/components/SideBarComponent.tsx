import * as React from "react";
import { useState } from "react";

import '../style/side-bar.css'
import { MdArrowForward, MdArrowBack, MdDateRange, MdChat, MdNoteAdd } from "react-icons/md";


export const SideBarComponent: React.FC<{}> = () => {

    const [sideBar, setSideBar] = useState(false);
    const handleChangeSideBar = () => setSideBar((prevState) => !prevState);

    return (
        <div className="bar-side-page">
            {!sideBar ? (

                <div className="closed-bar-side">
                  <button className="btn"><MdNoteAdd/></button>
                    <button className="btn"><MdChat/></button>
                    <button className="btn"><MdDateRange/></button>

                    <button onClick={handleChangeSideBar}>
                        <MdArrowForward />
                    </button>
                </div>
            ) : (

                <div className="opened-bar-side">

                    <button className="btn"><MdNoteAdd/>Notes</button>
                    <button className="btn"><MdChat/>Message</button>
                    <button className="btn"><MdDateRange/>Calendar</button>

                    <button className="btn-open-close" onClick={handleChangeSideBar}>
                        <MdArrowBack />
                    </button>
                </div>)}
        </div>
    );
}

