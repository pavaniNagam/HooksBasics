import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function UseEffectFetchData() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Github users</h3>
      <ul>
        {users.map((user) => {
          console.log(user);
          return (
            <li>
              <img src={user.url} />
              <h4>{user.login}</h4>
              <a href={user.html_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetchData;
