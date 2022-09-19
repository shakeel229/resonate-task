import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';
function App() {
const [allUsers, setAllUsers] = React.useState([]);


  React.useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setAllUsers(data))
    console.log(allUsers)

},[allUsers])
const cards = allUsers.map((user)=>{
  return(
    <Card id={user.id}
          {...user}
    />
  )
})
  return (
    <div className="App">
      <div className='main-content'>
      <Header></Header>
      
      {cards}
      </div>
    </div>
  );
}

export default App;
