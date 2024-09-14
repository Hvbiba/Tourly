import React from "react";
import GalleryFade from "./GalleryFade";



export default function Gallery(){
    return(
        <div className="container my-5" id="gallery-section">
            <div className="text-center p-1">
                <h5>Photo Gallery</h5>
                <h3 className="text-dark">Photo's From Travellers</h3>
                <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,<br/>rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>
            <GalleryFade />
        </div>
        
    )
}