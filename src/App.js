import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <div>
          <input placeholder="search an artist" />
          <button>submit</button>
        </div>
        <div className="Artist-profile">
          <div className="Artist-picture"></div>
          <div className="Artist-name"></div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
