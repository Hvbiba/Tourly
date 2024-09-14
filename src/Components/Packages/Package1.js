import React from "react";
import packageImage from '../../img/packege-1.jpg'; // Adjust the path

export default function Package1() {
  return (
    <div className="d-flex" id="package">
      <img src={packageImage} alt="Package 1" />
      <div className="p-5">
            <h4>Experience The Great Holiday On Beach</h4>
            <p>Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores,
                <br></br> est aliquet porttitor! Eaque, cras, aspernatur.</p>
            <p> 
                <i className="fa fa-clock-o mx-2" aria-hidden="true"></i> 7D/6N |
                <i className="fa fa-users mx-2" aria-hidden="true"></i> pax: 10 | 
                <i className="fa fa-plane mx-2" aria-hidden="true"></i> Malaysia
            </p>
      </div>
      <div className="text-center p-5 text-light" id="bg-package">
            <p>(40 reviews)</p>
            <p><span className="fs-2">$750</span><br/>/ per person</p>
            <button type="button" className="btn btn-light">Book Now</button>
      </div>
    </div>
  );
}
