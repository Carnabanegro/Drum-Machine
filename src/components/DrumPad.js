import React  from 'react';
import ButtonPad from './ButtonPad';
import '../App.css';
import { Slider } from '@material-ui/core';

//ARREGLO DE SONIDOS

const drums = [{
  key: 'Q',
  keyCode: 81,
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  key: 'W',
  keyCode: 87,
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  key: 'E',
  keyCode: 69,
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  key: 'A',
  keyCode: 65,
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  key: 'S',
  keyCode: 83,
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  key: 'D',
  keyCode: 68,
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  key: 'Z',
  keyCode: 90,
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  key: 'X',
  keyCode: 88,
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  key: "C",
  keyCode: 67,
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

class  DrumPad extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      soundStyle:drums,
      currentSound: '',
      power: true,
      volumeInput: 50,
      volume: 0.5,
    } 

    this.updateDisplay = this.updateDisplay.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.powerHandler = this.powerHandler.bind(this);
  }

  powerHandler() {
    this.setState({
      power:!this.state.power
    })
  }

  updateDisplay = (id) =>{
    this.setState({currentSound:id});
  }

  volumeHandler (event) {
    let volume = event.target.value/100;
    this.setState({
      volume:volume,
      volumeInput:event.target.value
    });
  }
  

  
  render(){
    return(
      <div id="display" className="display-container">
        <div className="buttons-container">
          {this.state.soundStyle.map((sounds,i)=>(<ButtonPad 
                                key={i}
                                sound={sounds}
                                power={this.state.power}
                                keyTrigger={sounds.key} 
                                src={sounds.url} 
                                currentSound={this.updateDisplay}
                                displayName={sounds.id}
                                volume={this.state.volume}
                              />
                      ))
          } 
        </div>
        <div className="menu">
          <div className="display-drum"><text className="text-style">{this.state.currentSound}</text></div>
          <Slider
            volume={typeof volumeInput === "number" ? this.state.volumeInput : 0}
            onChange={this.volumeHandler}
            aria-
          />
        </div>
      </div>
  
    );
  }
}

export default DrumPad;