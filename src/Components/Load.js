import React from "react";

export default function Loading(){
    return(
        <div className="container d-flex justify-content-center align-items-center w-100 m-auto " id="loadingPage">
            <h1 className="fs-1 text-center text-dark">
                <i className="fa fa-spinner fa-spin " id="loadingIcon"></i>
            </h1>
        </div>
    )
}