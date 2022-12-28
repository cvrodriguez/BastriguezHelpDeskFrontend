import * as React from "react";
import { useEffect } from "react";

import {useAppDispatch,useAppSelector} from '../hooks'
import { selectUsersList } from "../store/user/selectors";
import { fetchUser } from "../store/user/thunks";
export const AgentstListComponent: React.FC<{}> = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsersList)

    useEffect(() => {
        dispatch(fetchUser())

    }, [])
    return(
        <div>{users.map((u)=>{
            return(
                <div key={u.id}>
                    <h1>{u.name}</h1>
                </div>
            )
        })}</div>
    )
}
