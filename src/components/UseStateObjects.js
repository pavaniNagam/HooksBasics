import React,{useState} from 'react'

function UseStateObjects() {

const data = {
    name: 'peter',
    age:24,
    message:"randome message"
}

const changeMessage = () => {
    // const newPerson = {...person};
    // newPerson.message ='Hello world'
    // setPerson(newPerson);

    setPerson({...person,message:'hello world'});
}

const [person,setPerson] = useState(data);
const {name,age,message} = person
  return (
    <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h4>{message}</h4>
        <button className="button" onClick={changeMessage}>change messgae</button>
    </div>
  )
}

export default UseStateObjects