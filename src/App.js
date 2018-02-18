import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Master</div>
        <div>
          <input placeholder="search an artist" />
          <button>button</button>
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
