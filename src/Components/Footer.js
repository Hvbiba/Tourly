
import React from "react";
import Logo from "./Logo";
import Icons from './Media'
export default function Footer(){
    return(
        <footer className="footer pt-5 text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="d-flex ">
                    <Logo/>
                </div>
                <p>Explore the world with Tourly! We specialize in crafting personalized travel experiences, from exotic getaways to thrilling adventures. Let our experts handle the details, so you can focus on making unforgettable memories.</p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="text-light">Quick Links</h5>
                <ul className="list-unstyled text-light" style={{lineHeight:'30px'}}>
                    <li><a href="#" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></li>
                    <li><a href="#gallery-section" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Gallery</a></li>
                    <li><a href="#package-section" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Packages</a></li>
                    <li><a href="#About-section" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">About US</a></li>
                    <li><a href="#contact-us" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact Us</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="text-light">Contact Us</h5>
                <ul className="list-unstyled">
                    <p>Contact us today to begin planning your next unforgettable adventure!</p>
                    <li><i className="fa fa-plane" aria-hidden="true"></i> 123 Tourly St, City, State</li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i> +1 234 567 890</li>
                    <li><i className="fa fa-envelope" aria-hidden="true"></i> info@Tourly.com</li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-light">Follow Us</h5>
                <p className="">Follow us on Social Media for travel inspiration and exclusive offers!</p>
                <Icons />
            </div>
        </div>
        </div>
    </footer>

    );
}
