import React from "react";


const details = (props) => {


    return (
        <div className="details">
            <img src={props.item.imageUrl} className="details-img"></img>
            <div className="details-jor">
            <span className="city">📍&nbsp; {props.item.location} &nbsp; </span><span className="city-map" >&nbsp; <a href={props.item.googleMapsUrl}> View on google map </a></span>
            <h1 className="location-name"> {props.item.title}</h1>
            <h3 className="sub">
            {props.item.startDate}
            - 
            {props.item.endDate}
            </h3>
            <p className="discription-subs">
            {props.item.description}
            </p>

            </div>
        </div>

    )
}

export default details