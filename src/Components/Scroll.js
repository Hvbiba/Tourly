import React, { useEffect, useState } from "react";

export default function Scroll() {
    const [isScrolling, setScrolling] = useState(false);

    function handleScroll() {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <button
            className={`btn btn-primary position-fixed bottom-0 end-0 m-3 ${isScrolling ? 'd-block' : 'd-none'}`}
            onClick={scrollToTop}
            style={{ width: '50px', height: '50px', fontSize: '24px' }}
        >
           <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
    );
}
