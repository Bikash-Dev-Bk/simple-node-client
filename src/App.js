import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <br />
        <input type="text" name="name" id="name" placeholder='Your Name'/>
        <br />
        <input type="text" name="email" id="email" placeholder='Your Email'/>
        <br />
        <br />
        <input type="submit" value="Add user" />
        
      </form>
      <h3>Users: {users.length}</h3>
      <div>
        {
          users.map(user => <p key={user.id}> Name: {user.name}, Email: {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
