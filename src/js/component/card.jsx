import React from 'react';
import { PropTypes } from "prop-types";


function Card(props){

    

return ( 
<div className= "card" style= {{"width": "18 rem"}}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{props.título}</h5>
        <p className= "card-text">
            some quick example text to build a card title and make up the bulk of the cards content.
        </p>
        <a href="#" className= "btn btn-primary">
            go somewhere
            </a>
            </div>
            </div>
);
}
Card.propTypes = {
    título: PropTypes.string, img: PropTypes.string,

    //// key is the name of the prop and
  // value is the PropType
  };
  
export default Card; 
