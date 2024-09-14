import React from "react";
import contactImg from '../../img/contactImg.png';
import Form from "./Form";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Contacts() {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return (
        <div className="container contact-us d-flex justify-content-between py-3" id="contact-us">
            <div  className="container m-auto" >
                <img src={contactImg} alt="Contact" className="w-100 px-5" data-aos="zoom-in-right"/>
            </div>
            <Form />
        </div>
    );
}
