import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
 
const Added =()=>{

const user = useSelector(selectUser);
    return(
        <div className="added">
            <h1><span className="user__name">{user.first}</span></h1>
        </div>
    )
}
export default Added;