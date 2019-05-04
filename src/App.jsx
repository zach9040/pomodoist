import React from 'react';
import Song from './components/Song';
import songData from './components/Data';
import Current from "./components/CurrentlyPlaying";
import Next from "./components/NextButton";
import Previous from "./components/PreviousButton";
import PausePlayButton from "./components/PausePlayButton";
import RecentlyPlayed from "./components/RecentlyPlayed";
import './styles/App.css';


let client_id = '6b8e9bf5d4ee484b96d681c3e294c5e1';
let client_secret =  '2479ef02e5e7484aaf445426f3a998cc';
let redirect_uri = "http://localhost:3000/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pauseSong = this.pauseSong.bind(this);
    this.getRandomSong = this.getRandomSong.bind(this);
    this.playPreviousSong = this.playPreviousSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.clearRecent = this.clearRecent.bind(this);
    this.getToken = this.getToken.bind(this);
    this.state = {
      nowPlaying: {name : 'Nothing'},
      prevSong: {},
      isPlaying: false,
      songs : songData.songs,
      recent : [],
      token : 'asdftok',
      isLoaded : false
    };
  }

  clearRecent() {
    let clear = [];
    this.setState({recent : clear});
  }

  playPreviousSong() {
    let previous = this.state.prevSong;
    this.setState({nowPlaying : previous, prevSong : {}});
  }

  getRandomSong() {
    const nextSong = songData.songs[Math.floor(Math.random()* songData.songs.length)];
    this.setState({nowPlaying : nextSong, prevSong : this.state.nowPlaying,
        isPlaying : true, recent : this.state.recent.concat([this.state.nowPlaying])});
  }

  playSong(name, art, spotifyLink) {
    let newSong = {name : name, albumArt : art, spotifyLink : spotifyLink};
    let previous = this.state.nowPlaying;
    this.setState({nowPlaying : newSong, prevSong : previous
      , recent : this.state.recent.concat([previous])});
  }

  pauseSong() {
    this.setState({isPlaying : !this.state.isPlaying})
  }


  async getToken() {
    const token = window.location.replace('https://accounts.spotify.com/authorize?' +
        'client_id=' + client_id + '&redirect_uri=' +
        redirect_uri + '&response_type=token')
    const tokenJson = await token.json();
    this.setState({
      token : tokenJson.access_token
    })
  }

  render() {
    return (
      <div className="flex-wrapper">
        <h2> BETTER THAN SPOTIFY </h2>
        <div>
          <button onClick={() => this.getToken()}>
            Login
          </button>
        </div>
        <div className="songDisplay">
          {this.state.songs.map(song => <Song title={song.name} link={song.spotifyLink}
                                              image={song.albumArt} onClick={this.playSong}/>)}
        </div>
        <div className="current">
          <Current title={this.state.nowPlaying.name} />
          <div className="buttonDisplay">
            <Previous isPlaying={this.state.isPlaying} onClick={this.playPreviousSong}/>
            <PausePlayButton isPlaying={this.state.isPlaying} onClick={this.pauseSong}/>
            <Next isPlaying={this.state.isPlaying} onClick={this.getRandomSong}/>
          </div>
          <div className="recent">
            <RecentlyPlayed songList={this.state.recent} onClick={this.clearRecent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
