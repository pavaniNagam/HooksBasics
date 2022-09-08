import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setTimeout(() => {
        setValue((prevState) => {
            return prevState+1
        });
    }, 2000);
  }

  const decrement = () => {

  }

  const reset = () => {

  }

  return (
    <div>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <div className="button_container">
        <button className="button" onClick={()=>setValue(value-1)}>decrease</button>
        <button className="button" onClick={()=>setValue(value+1)}>increase</button>
        <button className="button" onClick={()=>setValue(0)}>reset</button>
      </div>



      <h2 style={{marginTop:'190px'}}>Complex Counter</h2>
      <h1>{value}</h1>
      <div className="button_container">
        <button className="button" onClick={decrement}>decrease</button>
        <button className="button" onClick={increment}>increase</button>
        <button className="button" onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
