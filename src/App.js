import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad';



class  App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <div id="drum-machine">
          <DrumPad/>
        </div>
      </div>
    );
  }
}

export default App;