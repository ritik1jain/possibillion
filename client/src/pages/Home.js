import React, { Component } from 'react'
import Sidebar from '../components/sidebar/Sidebar';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            playing: false,
            audio : null
        }
        this.startVideo = this.startVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.toggleMicrophone = this.toggleMicrophone.bind(this);
    } 

    async getMicrophone() {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
      }
      );
      this.setState({ audio });

    }

    stopMicrophone() {
      this.state.audio.getTracks().forEach(track => track.stop());
      this.setState({ audio: null });
    }
    toggleMicrophone() {
      if (this.state.audio) {
        this.stopMicrophone();
      } else {
        this.getMicrophone();
      }
    }

 startVideo = () => {
  this.setState({
      playing : true
  });
  navigator.getUserMedia(
    {
      video: true
    },
    (stream) => {
      let video = document.getElementsByClassName('app__videoFeed');
      Array.from(video).forEach(e => e.srcObject = stream)
    },
    (err) => console.error(err)
  );
};

stopVideo = () => {
  this.setState({playing : false});
  let video = document.getElementsByClassName('app__videoFeed')[0];
  if(video){
  video.srcObject.getTracks()[0].stop();}
};

    render() {
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="stream-box-width">
      <span className="btn float-start live-btn">Go Live</span>
      <span className="float-end live-studio">Live Studio</span>
    </div>
  </div>
  <div className="row">
    <div className="stream-box">
      <div className="preview-btn app__container">Preview</div>
        <video
            width="100%" height="100%"
            autoPlay="autoplay"
            
            className="app__videoFeed"
        ></video>
      {/* <video autoPlay="autoplay" width="100%" height="100%">
        <source src="assets/images/videoplay.mp4" type="video/mp4" />
        <source src="assets/images/videoplay.webm" type="video/webm" />
        <source src="assets/images/videoplay.ogg" type="video/ogg" />
      </video> */}
      <div className="boxed-row">
        <span className="boxes">
          <ul>
            <li><img src="assets/images/box-icon-1.png" /></li>
            <li><img src="assets/images/box-icon-2.png" /></li>
            <li><img src="assets/images/box-icon-1.png" /></li>
            <li><img src="assets/images/box-icon-2.png" /></li>
            <li><img src="assets/images/box-icon-1.png" /></li>
            <li><img src="assets/images/box-icon-2.png" /></li>
          </ul>
        </span>
        <span className="full-icon">
          <img src="assets/images/full-screen-icon.png" />
        </span>
      </div>
    </div>
    <div className="stream-box-sm">
      <div className="signal-row">
        <span className="name">You</span>
        <span className="signal">
          <img src="assets/images/signal-icon.png" />
        </span>
      </div>
      <div className="stream-row">
        <div className="twich-toggle">
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round" />
          </label>
        </div>
        <video
                width="100%" height="100%"
                autoPlay="autoplay"
                className="app__videoFeed"
        ></video>
           
        {/* <video autoPlay="autoplay" width="100%" height="100%">
          <source src="assets/images/videoplay.mp4" type="video/mp4" />
          <source src="assets/images/videoplay.webm" type="video/webm" />
          <source src="assets/images/videoplay.ogg" type="video/ogg" />
        </video> */}
        <div className="enlarge">
          <span className="onair">On Air</span>
          <span className="enlarge-icon"><img src="assets/images/enlarge-icon.png" /></span>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="stream-box-controls">
      <div className="controls-nav">
        <ul>
        <li>
            <a className={this.state.audio ? "" : "hide"} onClick={this.toggleMicrophone}>
               <img src="assets/images/mic-icon.png" />
              </a>
        </li>
             <li>{this.state.playing ? (
            <a  onClick={this.stopVideo}><img src="assets/images/video-icon.png" /></a>
        ) : (
            <a className="hide" onClick={this.startVideo}><img src="assets/images/video-icon.png" /></a>
        )}</li>
          <li><a  data-bs-toggle="modal" data-bs-target="#screen_share"><img src="assets/images/screen-share-icon.png" /></a></li>
          <li>
            <div className="btn-group dropup meander-dropup">
              <a data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/add-user-icon.png" />
              </a>
              <ul className="dropdown-menu controls-dropdown">
                <li>Invite up to 6 guests. Need more?</li>
                <li><input className="full form-control" defaultValue="https://studio.restream.io/guest/bjJRNTg4eklALGRIpE3PgzxyG0I30eA?name-images=" />
                </li>
                <li>This link is permanent. Need a new one? <span><b>Refresh</b></span></li>
              </ul>
            </div>
          </li>
          <li><a >
              <input className="browse-video" type="file" />
              <img src="assets/images/video-payer-icon.png" /></a>
          </li>
          <li>
            <div className="btn-group dropup meander-dropup">
              <a data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/rtmp-icon.png" />
              </a>
              <ul className="dropdown-menu controls-dropdown">
                <div className="align-left case-div mb-20">
                  <li><img src="assets/images/img-rtmp.png" className="img-fluid" /></li>
                </div>
                <div className="align-left case-div mb-20">
                  <li>Bring a stream from 3rd-party tool into Studio. Available on company plans only.</li>
                  <li><span className="btn upgrade-btn">Upgrade Now</span></li>
                </div>
                <div className="align-left case-div">
                  <h6>Use case examples</h6>
                  <li>Share your Zoom Events in Studio</li>
                  <li>Include your OBS Stream in your layout</li>
                </div>
              </ul>
            </div>
          </li>
          <li>
            <div className="btn-group dropup meander-dropup">
              <a data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/settings-icon.png" />
              </a>
              <ul className="dropdown-menu controls-dropdown">
                <li>Video Input<br />
                  <select className="form-control full">
                    <option>Testing</option>
                  </select>
                </li>
                <li>Video Resolution<br />
                  <select className="form-control full">
                    <option>Testing</option>
                  </select>
                </li>
                <li>Audio Input<br />
                  <select className="form-control full">
                    <option>Testing</option>
                  </select>
                </li>
                <li>Live Stream Quality<br />
                  <select className="form-control full">
                    <option>Testing</option>
                  </select>
                </li>
                <li>Want Full HD quality? <span><b>Upgrade Now</b></span></li>
                <li>
                  <p>Audio preferences</p>
                  <div className="audio-preference">
                    <label><input type="checkbox" />Echo cancellation</label>
                    <label><input type="checkbox" />Noise suppression</label>
                    <label><input type="checkbox" />Stereo audio input</label>
                    <label><input type="checkbox" />High-resolution audio</label>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</main>
</>
        )
    }
}

export default Home;
