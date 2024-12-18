import React from 'react'; 
import './App.css';
import { YoutubeForm } from './components/youtubeForm';
import PlainReactForm from './components/plainReactForm';

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm/> */}
      <PlainReactForm/>
    </div>
  );
}

export default App;
