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
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = {name, email};
    console.log(name, email);
    event.target.reset();

    fetch('http://localhost:5000/users',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newUser = [...users, user];
      setUsers(newUser);
    })
    .catch(err => console.error(err))
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
