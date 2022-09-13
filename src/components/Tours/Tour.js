//individual item

import React, { useState } from "react";

function Tour(props) {
  const { id, image, info, name, price } = props.tour;
  console.log("Tour",props);

  return (
    <div>
      <img src={image} />
      <h4>{name}</h4>
      <h4>{price}</h4>

      <button className="btn" onClick={()=>props.removeTour(id)}>Not interested</button>
    </div>
  );
}

export default Tour;
