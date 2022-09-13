import React, { useState, useEffect } from "react";
import Tours from './Tours'

const url = "https://course-api.com/react-tours-project";

function ToursContainer() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState("");

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const toursVal = await response.json();

      setTours(toursVal);
      console.log("toursVal",toursVal);
    } catch (error) {
      console.log("ERROR++++++>", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log("USE EFFECT===>");
    fetchTours();
  }, []);

  const removeTour = (id) => {
    console.log("Remove tour");
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    })
    setTours(newTours);
  }

  return <div>
    {error ? (<h3>{error}</h3>) : (
          <Tours tours={tours}  removeTour={removeTour}/>
          
    )}
    </div>;
}

export default ToursContainer;
