import React, { useEffect, useState } from "react";
import axios from 'axios'
import Slider from "react-slick";
import Loading from "./Load";

export default function TopHotels() {
    const [places, setPlaces] = useState([])
    const [isLoad, setLoad] = useState(true)
    async function fetchData() {
        try {
            const { data } = await axios.get('https://run.mocky.io/v3/fa828628-90c1-4c23-a32c-f33eccf82ccc')
            console.log(data)
            setLoad(false)
            setPlaces(data.topHotels)
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
                <h5>Top Hotels</h5>
                <h3 className="text-dark">Top Hotels To Stay In</h3>
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
                                        <img src={card.image} className="card-img-top" alt="..." style={{height:'180px'}}></img>
                                        <div className="card-body">
                                            <h5 className="fs-6"><i className="fa fa-plane" aria-hidden="true"></i> {card.city}</h5>
                                            <h5 className="card-title fs-5">{card.hotelName.split(' ').splice(0,2).join(' ')}</h5>
                                            <hr />
                                            <p>Price / Person: <span className="text-danger">$ {card.pricePerPerson}</span></p>
                                            <h6>
                                                <i className="fa fa-bed px-2" aria-hidden="true"></i>{card.info.rooms} |
                                                <i className="fa fa-bath px-2" aria-hidden="true"></i>{card.info.baths}
                                            </h6>
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