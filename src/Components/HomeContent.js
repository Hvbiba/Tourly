import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HomeContent() {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100" id="home-content">
            <div className="container text-light text-center m-auto " data-aos="zoom-out-down">
                <h1 className="">Journey to explore world.</h1>
                <p className="fs-6 p-2">
                    Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant?
                    Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center" id="btns">
                    <button className="btn btn-primary" type="button">Learn More</button>
                    <button className="btn btn-light text-dark" type="button">Book Now</button>
                </div>
            </div>
        </div>
    );
}
