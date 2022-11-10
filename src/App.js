import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [pageNum, setPageNum] = useState(false);
  const [loading, setLoading] = useState(false);

  const changePageNumber = () => {
    setPageNum(!pageNum);
  };
  

  const handleGetusers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://reqres.in/api/users?page=${pageNum ? 2 : 1}`);
      const users = await res.json();
      setUsers(users.data);
      changePageNumber();
      setLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  };

console.log(pageNum)

  return (
    <div className="app">
      <Header handleGetusers={handleGetusers} />
      <div className="container">
        {loading ? <Loading /> : (
          <>
            {users.map((user) => (
            <UserCard
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
              imageURL={user.avatar}
            />
          ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
