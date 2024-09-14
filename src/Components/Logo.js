import React from "react";
import logo from '../img/logo-blue.svg'

export default function Logo(){
    return(
    <>
        <div className="container px-2 m-0 text-light" id="logo">
            <img src={logo} alt='logo' className="w-100"/>
        </div>
    </>
    )
}