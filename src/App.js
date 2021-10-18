import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
//import './Logo.css'
import './App.css';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';

class App extends Component {
  //we are creating the constructor to read the value in the Imagelinkform
  //constructor, oninputchange, imagelinkform are where the changes have been made

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit=()=>{
    console.log('click');
  }
render(){
  return (
    
    <div className="App">
        <Navigation/>
        <Logo/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Rank/>
        <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: { 
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
     
              
            
        {/* 
        <FaceRecognition/>
        
        */}
      
      </div>
  );
  } 
}

export default App;
