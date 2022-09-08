import React,{useState} from 'react'

function UseStateBasics() {
    const [text,setText] = useState("Random Title");

    const handleButtonClick = () => {
        if(text == "Random Title"){
            setText("Hello world");
        }else{
            setText("Random Title");
        }
    }

  return (
    <div>
        <h1>{text}</h1>
        <button onClick={handleButtonClick}>Change Title</button>
    </div>
  )
}

export default UseStateBasics