import React from 'react';
import './App.css';
import Greet from './components/Greet';
import PersonList from './components/PersonList'; 
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

function App() {
  const names = [
    {first:"Bruce", last:"Wayne"},
    {first:"Clark", last:"Kent"},
    {first:"Peter", last: "Parker"}
  ]

  return (
    <div className="App">
      {/* <Greet name='Vishwas' messageCount={3} isLoggedIn={false} /> */}
      {/* <PersonList names={names} /> */}
      <Status status='loading'/>
      <Oscar>
        <Heading>Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
