import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Form(){
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return(
    <div className="container py-3" id='form-containetr'>
        <form className=" p-5 bg-light w-100 m-auto"  data-aos="zoom-in-left" >
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">User Name:</label>
                <input type="text" className="form-control" placeholder="First Last Name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Message</label>
                <input type="text" className="form-control" id="message-input" placeholder="Message" />
            </div>
            <button type="button" className="btn btn-dark text-center d-flex justify-content-center mt-4" 
            style={{width:'90px' , margin:'auto' , height:'43px'}}
            >
                send
            </button>
        </form>
    </div>
    );
}