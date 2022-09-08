import React from "react";

function UseArrayBasics() {
  const data = [
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ];

  const [people, setPeople] = React.useState(data);
  const [message, setMessage] = React.useState("");

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };
  const clearAllItems = () => {
    setPeople([]);
    setMessage("You have cleared all the Data");
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      {people.length > 0 ? (
        <button className="button" onClick={clearAllItems}>
          Clear All
        </button>
      ) : null}

      <h2>{message}</h2>
    </div>
  );
}

export default UseArrayBasics;
