import React from "react";
const SecondsCounter = ({seconds}) => {

    const newSeconds = seconds.toString()
    const charts = newSeconds.split("")
    
    
    
    return(
        
        <div className="container d-flex gap-5 bg-dark justify-content-center">
            <div className="icon-clock"><i className="far fa-clock fa-3x text-light"></i></div>
            <div className="card">{charts[5] ? charts[5] : 0}</div>
            <div className="card">{charts[4] ? charts[4] : 0}</div>
            <div className="card">{charts[3] ? charts[3] : 0}</div>
            <div className="card">{charts[2] ? charts[2] : 0}</div>
            <div className="card">{charts[1] ? charts[1] : 0}</div>
            <div className="card">{charts[0] ? charts[0] : 0}</div>
        </div>
    )
};

export default SecondsCounter;