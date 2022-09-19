import React from "react";
import './Card.css'

export default function Card(props) {
    console.log(props);
    
    return(
        <div class="basic-card basic-card-light">
                <div class="card-content">
                    <span class="card-title"></span>
                    
                        <h4 className="personal-info">
                        Personal Details
                        </h4><hr className="fancy-line"></hr>
                    <p className="line">
                       <span className="card-labels">Name: </span> {props.name}
                        
                       <span className="left-items">&nbsp;Username: &nbsp;</span>  {props.username}

                        </p>
                        <p className="line">
                       <span className="card-labels">Email: </span>  <a href={`mailto:${props.email}`}>{props.email}</a><span></span>
                        
                       <span className="left-items">Phone: &nbsp;</span>  <span>{props.phone}</span>

                        </p>
                        <p className="line">
                       <span className="card-labels">Website: </span> <a href={`https://www.${props.website}`} target="_blank" rel="noreferrer">{`www.${props.website}`}</a></p>
                        <p className="line">
                       <span className="card-labels">Address: </span> <br></br> 
                        </p>
                        <p className="address-lines">
                        <span className="bold-text"> &nbsp;Street&nbsp;&nbsp; 
                       </span><span>{props.address.street}<span className="bold-text"> &nbsp;Suite &nbsp;</span> {props.address.suite}        
                       </span>
                       <span className="bold-text">&nbsp; City&nbsp;</span>{props.address.city} 
                        </p>
                        
                       <p className="address-lines">
                       <span className="bold-text">&nbsp; Zip Code&nbsp;</span>{props.address.zipcode}
                       <span>&nbsp;&nbsp;&nbsp;<a href={`https://maps.google.com/maps?q=${props.address.geo.lat},${props.address.geo.lng}&hl=es;z=14&amp;`} target="_blank" rel="noreferrer">
                          View On Google Maps</a>&nbsp;</span></p>
             

<h4 className="personal-info">
                        Company Details
                        </h4><hr className="fancy-line"></hr>
                        <p className="line">
                       <span className="card-labels">Business Name: </span>{props.company.name}
                        </p>
                        <p className="line">
                       <span className="card-labels">Vision: &nbsp;</span>  {props.company.catchPhrase}
                        </p>
                        <p className="line">
                       <span className="card-labels">Business Services: </span>{props.company.bs}
                        </p>
                   

                       
                </div>

                
            </div>
    )
}