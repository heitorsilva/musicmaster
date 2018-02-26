import React, { Component } from 'react';

class Profile extends Component {
  render() {
    let artist = {name: '', picture_big: '', nb_fan: null};
    let html = "";

    if (this.props.artist !== undefined && this.props.artist !== null) {
      artist = this.props.artist;
      html = (
        <div className="Artist-profile">
          <img src={artist.picture_big} alt={artist.name} className="Artist-picture" />
          <div className="Artist-info">
            <div className="Artist-name">{artist.name}</div>
            <div className="Artist-fans">{artist.nb_fan} fans</div>
          </div>
        </div>
      );
    }

    return html;
  }
}

export default Profile;
