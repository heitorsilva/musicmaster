import React, { Component } from 'react';

class Profile extends Component {
  render() {
    let html = '';
    const { artist } = this.props;

    if (artist) {
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
