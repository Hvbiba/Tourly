import React from "react";
import Contacts from "./ContactUs";

export default function ContactUS(){
    return(
        <div className="container my-5" id="contact-section">
             <div className="text-center p-1">
                <h5>Contact Us</h5>
                <h3 className="text-dark">Stay Connected with Us</h3>
                <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br/>rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>
            <Contacts />
        </div>
    )
}