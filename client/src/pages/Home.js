import React, { useEffect, useState, useRef } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

const Home = (props) => {

  const [connected, setConnected] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [streaming, setStreaming] = useState(false);
  
  const inputStreamRef = useRef();
  const audioStreamRef = useRef();
  const videoRef = useRef();
  const canvasRef = useRef();
  const wsRef = useRef();
  const mediaRecorderRef = useRef();
  const requestAnimationRef = useRef();
  const cameraRef = useRef(cameraEnabled);
  const audioRef = useRef(audioEnabled);
  
  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    }
  }, []);


  const setCamera = (data) => {
    cameraRef.current = data;
    setCameraEnabled(data);
  };

  const setAudio = (data) => {
    audioRef.current = data;
    setAudioEnabled(data);
  };

  
  const enableCamera = async (e) => {
    setCamera(true);
    setEnabled(true);
    inputStreamRef.current = await navigator.mediaDevices.getUserMedia({
      video: true
    });

    videoRef.current.srcObject = inputStreamRef.current;
    await videoRef.current.play();

    requestAnimationRef.current = requestAnimationFrame(updateCanvas);   
  }

const disableCamera = () => {
  setCamera(false);
  if(!audioEnabled)
  setEnabled(false);
  let video = document.getElementsByClassName('app__videoFeed')[0];
  if(video){
  video.srcObject.getTracks()[0].stop();}
};

const getMicrophone = async () => {
    audioStreamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
    }
    );
    setAudio(true);
    setEnabled(true);
  }

  const stopMicrophone = () => {
    audioStreamRef.current.getTracks().forEach(track => track.stop());
    setAudio(false);
    if(!cameraEnabled)
    setEnabled(false);
  }
  const toggleMicrophone = () => {
    if (audioEnabled) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  }
  


  const updateCanvas = () => {
    if (videoRef.current.ended || videoRef.current.paused) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    ctx.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );

    requestAnimationRef.current = requestAnimationFrame(updateCanvas);
  };

  const stopStreaming = () => {
    setStreaming(false);
    mediaRecorderRef.current.stop();
    
  };

  const startStreaming = () => {
    setStreaming(true);

    wsRef.current = new WebSocket(
      window.location.protocol.replace('http', 'wss') + '//' + 
      'localhost:4000' +
      '/rtmp/' + 
      encodeURIComponent(props.data.secure_url)
    );

    wsRef.current.addEventListener('open', (e) => {
      console.log('WebSocket Open', e);
      const videoOutputStream = canvasRef.current.captureStream(30); // 30 FPS

      const audioStream = new MediaStream();
      const audioTracks = audioStreamRef.current.getAudioTracks();
      audioTracks.forEach(function(track) {
        audioStream.addTrack(track);
      });

      const outputStream = new MediaStream();
      [audioStream, videoOutputStream].forEach(function(s) {
        s.getTracks().forEach(function(t) {
            outputStream.addTrack(t);
        });
      });
    
    

    mediaRecorderRef.current = new MediaRecorder(outputStream, {
      mimeType: 'video/webm;codecs=h264',
      videoBitsPerSecond: 3000000
    });
    console.log(mediaRecorderRef.current);

 
    mediaRecorderRef.current.addEventListener('dataavailable', e => {
      wsRef.current.send(e.data);
    });


    mediaRecorderRef.current.addEventListener('stop', () => {
      console.log("stop");
      wsRef.current.close.bind(wsRef.current);
      setStreaming(false);
      
    });
    
    mediaRecorderRef.current.start(1000); // Start recording, and dump data every second
  }
  );

  wsRef.current.addEventListener('close', (e) => {
    console.log('WebSocket Close', e);
    mediaRecorderRef.current.stop();
  });
  };

  
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="stream-box-width">
    {enabled ? (streaming ? (
            <button className="btn float-start live-btn" onClick={stopStreaming}>End Live</button>
        ) : (
          <button className="btn float-start live-btn" onClick={startStreaming}>Go Live</button>
        )):(<button className="btn float-start live-btn" disabled >Go Live</button>)}
      <span className="float-end live-studio">Live Studio</span>
    </div>
  </div>
  <div className="row">
    <div className="stream-box">
      <div className="preview-btn app__container">Preview</div>
        <video
        ref={videoRef}
            width="100%" height="100%"
            className="app__videoFeed"
        ></video>
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
           <canvas width="100%" height="100%" ref={canvasRef}></canvas>
          
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
            <a id="a" className={audioEnabled ? "" : "hide"} onClick={toggleMicrophone}>
               <img src="assets/images/mic-icon.png" />
              </a>
        </li>
             <li>{cameraEnabled ? (
            <a id="c"  onClick={disableCamera}><img src="assets/images/video-icon.png" /></a>
        ) : (
            <a id="c" className="hide" onClick={enableCamera}><img src="assets/images/video-icon.png" /></a>
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

export default Home;
