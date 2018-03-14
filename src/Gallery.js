import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let html = '';
    const { tracks } = this.props;

    if (tracks) {
      html = (
        <div className="Gallery">
          {tracks.map((track, k) => {
            const trackImg = track.album.cover_big;

            return (
              <div key={k} className="track">
                <img src={trackImg} className="track-img" alt="track" />
                <p className="track-title">{track.title_short}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return html;
  }
}

export default Gallery;
