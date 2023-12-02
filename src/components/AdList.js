import React from "react";

const AdList = (props) => {
    return (
        <div id="advertisements" class="row">
        {
          props.list.map(advertisement =>{

            const advertisementCardElement = <div class ="card mb-4 col-md-4">
             <img class ="card-img-top" src={advertisement.image} alt={advertisement.image} />
             <div class="card-body">
                <h5 class ="card-title" >{advertisement.title}  </h5>
                <p class="card-text"> {advertisement.description} </p>
                <p class="card-text">Contact: {advertisement.contact}  </p>

             </div>
             <div class="card-footer text-center" >
                <button class ="btn btn-info btn-block" onclick="alert('Contact:contact1example.com)">Details</button>

             </div>
              </div>
              return advertisementCardElement;
                  })
        }
        
        
        </div>
    )
}
     export default AdList;

