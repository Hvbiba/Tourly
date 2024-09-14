import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import place1 from '../img/popular-1.jpg';
import place2 from '../img/popular-2.jpg';
import place3 from '../img/popular-3.jpg';

export default function Places() {
    const obj = [
        {
            id: 1,
            img: place1,
            place: 'Italy',
            title: 'San miguel',
            text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
        },
        {
            id: 2,
            img: place2,
            place: 'Dubai',
            title: 'Burj khalifa',
            text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
        },
        {
            id: 3,
            img: place3,
            place: 'Japan',
            title: 'Kyoto temple',
            text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
        }
    ];

    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return (
        <>
            <div className="container my-5">
                <div className="text-center p-1">
                    <h5>Uncover place</h5>
                    <h3 className="text-dark">Popular destination</h3>
                    <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br />rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
                </div>
                <div className="places d-flex p-3 m-auto justify-content-center align-items-center justify-content-between">
                    {
                        obj.map(card => (
                            <div className="card" data-aos="zoom-in-right" style={{width:'20rem'}}>
                                <img src={card.img} className="card-img-top" alt="..." style={{ height: '430px' }} />
                                <div className="card-body bg-light m-auto">
                                    <h5>{card.place}</h5>
                                    <h5 className="card-title fs-5">{card.title}</h5>
                                    <p className="text-secondary">{card.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
