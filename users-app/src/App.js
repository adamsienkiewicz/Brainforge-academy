
import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getResponse() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());

    console.log(users);
    
  }
    getResponse()
  }, [users]);
  
  
  return (
    <div className="App">
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>{user.address.city}</p>
          <span>{user.address.street}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
