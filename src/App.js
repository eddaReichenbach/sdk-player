import React, {Component} from 'react';
import './App.css';

class Sketchbutton extends Component {
  render() {
    return(
      <div classNames="sketchbutton"
      style= {{width: '20%', padding: '10px' }}>
        <button>Sketch #</button>
      </div>
    );
  }
}

class Playback extends Component {
  render() {
    return(
      <div className="player">
        <img/>
        <h3>currently playing song - Artist</h3>
        <div style={{padding: '10px'}}>
          <button>backward</button>
          <button>play/pause</button>
          <button>forward</button>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spotify Visualiser</h1>
        <Sketchbutton/>
        <Sketchbutton/>
        <Sketchbutton/>
        <Playback/>
      </div>
    );
  }
}

export default App;
