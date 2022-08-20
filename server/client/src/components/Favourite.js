import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
    const Nav = useNavigate();
    const callFav = async () => {
        try {
            const res = await fetch('/fav',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            
            if(!res.status===400){
                throw new Error(res.error);
            }
        } catch (error) {
                Nav("/signin")
                console.log(error);
        }
    }

    useEffect(() => {
        callFav();
    },[])
    return(
        <></>
    )
}

export default Favourite;