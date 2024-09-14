import React from "react";
import Packge1 from "./Package1";
import Packge2 from "./Package2";
import Packge3 from "./Package3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function PackagesSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        autoplay: true,  
        autoplaySpeed: 3000, 
    };
    return(
        <>
        <div className="package-section my-5" id="package-section">
            <div className="text-center p-1">
                <h5>Popular Packeges</h5>
                <h3 className="text-dark">Checkout Our Packeges</h3>
                <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br/>rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>
            <div id="packages-slider" className="container w-100  py-4">
                <Slider {...settings}>
                    <Packge1 />
                    <Packge2 />
                    <Packge3 />
                </Slider>
            </div> 
        </div>
        
        </>
    )
}