import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: null,
      playing: false,
      url: ''
    }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);

    if (this.state.url === previewUrl && this.state.playing) {
      this.state.audio.pause();
      this.setState({playing: false});
    } else if (this.state.url === previewUrl && !this.state.playing) {
      this.state.audio.play();
      this.setState({playing: true});
    } else {
      if (this.state.audio) {
        this.state.audio.pause();
        this.setState({playing: false});
      }

      audio.play();

      this.setState({
        audio,
        playing: true,
        url: previewUrl
      });
    }
  }

  render() {
    let html = '';
    const { tracks } = this.props;

    if (tracks) {
      html = (
        <div className="Gallery">
          {tracks.map((track, k) => {
            const trackImg = track.album.cover_big;

            return (
              <div key={k} className="track" onClick={() => this.playAudio(track.preview)}>
                <img src={trackImg} className="track-img" alt="track" />
                <div className="track-icon">
                  <div className="track-icon-text">
                    {
                      this.state.url === track.preview && this.state.playing
                        ? <span>&#10073; &#10073;</span> : <span>&#9654;</span>
                    }
                  </div>
                </div>
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
