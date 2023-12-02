import React from "react";
import CardList from "./CardList";
import Card from "./Card";

const advertisement =  (props) => {
   return(
    <div class ="card mb-4 col-md-4">
        <img class="card-img-top" src={props.advertisement.image} />
        <div class =" card-body">
            <h5 class="card-title">{props.advertisement.title} </h5>
            <p class="card-text">{props.advertisement.description} </p>
            <p class=" card-text"> Contact:{props.advertisement.contact}  </p>

        </div>
         <div class="card-footer text-center">
            <button class=" btn btn-info btn-block">Details</button>
         </div>
    </div>
   )
}
       export default advertisement;             