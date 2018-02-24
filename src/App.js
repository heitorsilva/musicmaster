import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      artist: null
    };
  }

  search() {
    const BASE_URL = 'https://api.deezer.com/search';
    const PROXY = 'https://cors-anywhere.herokuapp.com';
    const FETCH_URL = `${PROXY}/${BASE_URL}?q=artist:"${this.state.query}"`;

    fetch(FETCH_URL, {method: 'GET', mode: 'cors'})
      .then(response => response.json())
      .then(json => {
        this.setState({'artist': json.data[0].artist});
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search() }>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile
          artist={this.state.artist}
        />
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
