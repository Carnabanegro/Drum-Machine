import React from 'react';
import '../App.css';
import {Howl} from 'howler';



class ButtonPad extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            playing: false,
        }; 
        this.playSoundHandler = this.playSoundHandler.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
        this.changeDisplaySoundHandler = this.changeDisplaySoundHandler.bind(this);
    };

    


    componentDidMount() {
        document.addEventListener('keydown', this.keyPressHandler);
      }
      
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPressHandler);
        
    }
    
    keyPressHandler(event){
        if (event.keyCode === this.props.sound.keyCode) {
            this.playSoundHandler();
        }
    }
    
    changeDisplaySoundHandler(){
        var  lang = this.props.displayName
        this.props.currentSound(lang)
    }

    playSoundHandler(){
       if (this.props.power){
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.changeDisplaySoundHandler()
        
       }
    }

    render(){
        return(
            
            <div  className="drum-pad-container">
                <button className="drum-pad" id={this.props.displayName} onClick={this.playSoundHandler}>
                    <audio src={this.props.src} class="clip" id={this.props.keyTrigger}></audio>
                    {this.props.keyTrigger}
                </button> 
            </div>
        );
   
    }
    

    
}

export default ButtonPad;