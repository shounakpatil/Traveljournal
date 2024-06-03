import React from "react";
function TravelSec(props) {
return(
     <div  className="journal">
        <div className="image">
            <img src={props.item.imageUrl} width="300px" alt={props.item.title} />
        </div>
        <div className="info">
       <p> <span><i className="fas fa-location-dot"></i>   {props.item.location}</span> 
       <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
        <h2>{props.item.title}</h2>
        <p id="date">{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
        </div>
     </div>
);
}
export default TravelSec;