import React, { useEffect } from 'react';
import img3 from '../../img/gallery-3.jpg';
import img4 from '../../img/gallery-4.jpg';
import img5 from '../../img/gallery-5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GalleryFade() {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return (
        <div className="gallery-container p-3" id="gallery">
            <div className="gallery-item side-div" data-aos="flip-right">
                <img src={img4} alt="Gallery 4" />
                <img src={img5} alt="Gallery 5" />
            </div>
            <div className="gallery-item main-div" data-aos="fade-down">
                <img src={img3} alt="Gallery 3" />
            </div>
            <div className="gallery-item side-div" data-aos="flip-left">
                <img src={img4} alt="Gallery 4" />
                <img src={img5} alt="Gallery 5" />
            </div>
        </div>
    );
}
