import React, { useEffect,useContext} from "react";
import {userContext} from '../App';
import { useNavigate } from "react-router-dom";

const Logout= () => {
    const {state,dispatch} = useContext(userContext);
    const Nav = useNavigate();

    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((res)=>{
            dispatch({type:"USER",payload:false});
            Nav('/signin',{replace:true});
            if(!res.status===200){
                throw new Error(res.error);
            }
        }).catch((error) => {
            console.log(error);
        })
    })
    return(
        <>
        </>
    )
}

export default Logout;