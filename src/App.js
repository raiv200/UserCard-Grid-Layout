import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  

  const handleGetusers = async () => {
    try {
      
      const res = await fetch(`https://reqres.in/api/users?page=1`);
      const users = await res.json();
      setUsers(users.data);
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="app">
      <Header handleGetusers={handleGetusers} />
      <div className="container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            imageURL={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
