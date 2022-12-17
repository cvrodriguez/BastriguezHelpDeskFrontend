import * as React from "react";
import { Outlet} from "react-router-dom";
import {NavBarComponent} from "../components";



export const HomePage: React.FC<{}> = () => {

    return (
        <div>
            <NavBarComponent></NavBarComponent>
            <Outlet/>


        </div>
    )


}

