import React,{useState,useEffect} from 'react'

function UseEffectBasics() {
  const [value,setValue] = useState(0)
const [message,setMessage] = useState("");

useEffect(() => {
  /** This will call whenever state variables are changing */
  console.log("Changes every time");
})

useEffect(() => {
  console.log("Calling only at once");
},[])

  useEffect(() => {
    /**This will call only when message variable is changing */
    console.log("Calling Use Effect");
    if(message.length != ""){
      document.title = message;
    }else{
      document.title = "React app";
    }
  },[message])

  

  useEffect(()=> {
    /** This will call only when value is changing */
    console.log("VALUE ONLY CHANGED");
  },[value])

  
  const changeMessage = () => {
    if(message.length == ""){
      setMessage("Hello there!");
    }else{
      setMessage("");
    }
  }

  return (
    <div>
      <h1>{value}</h1>
      <p>{message}</p>
      <button className="button" onClick={() => setValue(value+1)}>click me</button>
      <button className="button" onClick={changeMessage}>changeMessage</button>
    </div>
  )
}

export default UseEffectBasics