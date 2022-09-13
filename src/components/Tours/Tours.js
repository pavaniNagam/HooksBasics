//List of the array

import React from "react";
import Tour from "./Tour";

function Tours(props) {
  const  tours  = props.tours;
  console.log("TOURS=====>",props);
  return (
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={props.removeTour}/>;
      })}
    </div>
  );
}

export default Tours;
