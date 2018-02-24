import React, { Component } from 'react';

class Profile extends Component {
  render() {
    let artist = {name: '', picture: ''};

    if (this.props.artist !== null) {
      artist = this.props.artist;
    }

    return (
      <div className="Artist-profile">
        <div className="Artist-picture">
          <img src={artist.picture} alt={artist.name} />
        </div>
        <div className="Artist-name">{artist.name}</div>
      </div>
    );
  }
}

export default Profile;
