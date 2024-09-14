import React from "react";
import Places from "./Places";
import HomeContent from "./HomeContent";
import PackagesSlider from "./Packages/Packges";
import Gallery from "./Gallery/Gallery";
import ContactUS from "./Contact/Contact";
import AboutUs from "./AboutUs";
import TopPlaces from "./TopPlaces";
import TopHotels from "./Hotels";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Home(){
    return(
    <>
        <Navbar/>
        <HomeContent />
        <Places/>
        <PackagesSlider />
        <Gallery />
        <TopPlaces />
        <TopHotels />
        <ContactUS />
        <AboutUs />
        <Footer />
    </>
    )
}