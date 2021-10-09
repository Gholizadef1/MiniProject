import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {add} from '../features/userSlice'
import './add.css'
const Add=()=>{
    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");
    const[code,setCode] = useState("");

    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(add({
            first:first,
            last:last,
            code:code,
            loggedin:true,
        }))
    }
    return(
        <div className="add">
            <form className="add__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>add here</h1>
                <input 
                type="name" 
                placeholder="نام" 
                value={first} 
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="last"
                 placeholder="نام خانوادگی"
                 value={last}
                 onChange={(e) => setEmail(e.target.value)}
                 />
                <input 
                type="code" 
                placeholder="کد"
                value={code}
                 onChange={(e) => setPass(e.target.value)}
                 />

            <button type="submit" className="submit__btn">اضافه‌کردن</button>
            </form>

        </div>
    )
}
export default Add;