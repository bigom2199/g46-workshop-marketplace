import React from "react";
const button = (person) => {
    const {child} = person;
    return (
        <button className ="btn btn-info shadow">
            {child}
        </button>
    )
}
 const Card= (title,description,contact,image) => {
    return (
        <div className = " card" >
            <img src = {image} lable= {title} />
            <div className ="card-body">
                <h3 className = "card-title fw-bold">title</h3>
                <p className =" card-text">description</p>
                <p className = "card-text">contact</p>
                <div className = "text-center">
                    <button>Details</button>
                </div>
            </div>
        </div>
    )
 }
  export default Card;