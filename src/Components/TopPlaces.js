import React, { useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick";
import Loading from "./Load";

export default function TopPlaces() {
    const [places, setPlaces] = useState([])
    const [isLoad, setLoad] = useState(true)
    async function fetchData() {
        try {
            const { data } = await axios.get('https://run.mocky.io/v3/72834ae9-c438-41e7-b5f1-67b942c1f08a')
            console.log(data)
            setLoad(false)
            setPlaces(data.topVisitedPlaces)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <div className="container my-5" id="top-places">
            <div className="text-center p-1">
                <h5>Top Places</h5>
                <h3 className="text-dark">Top Visited Places</h3>
                <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br />rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>
                {isLoad ? (
                    < Loading />
                ) : (
                    <div className="cards py-3">
                        <Slider {...settings}>
                            {places.map((card) => (
                                <div className="px-1">
                                    <div className="card" key={card.id} >
                                        <img src={card.image} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="fs-6"><i className="fa fa-plane" aria-hidden="true"></i> {card.city}</h5>
                                            <h5 className="card-title fs-5">{card.landmark}</h5>
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <p>{card.duration}</p>
                                                <p className="text-danger">$ {card.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </Slider>
                    </div>
                )}
        </div>
    );
}