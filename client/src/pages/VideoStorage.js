import React, { Component } from 'react'
import Sidebar from '../components/sidebar/Sidebar';

export class VideoStorage extends Component {
    render() {
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="video-starage-box">
      <h1>Video Storage <span><button className="btn"><i className="fa fa-upload" aria-hidden="true" /> Upload Video</button></span></h1>
      <div className="upload-starage-box video-upload-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Uploads</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Recordings</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="row">
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video controls autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row">
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
              <div className="col-lg-3">
                <div className="video-store">
                  <video controls autoPlay="autoplay" width="100%" height="100%">
                    <source src="assets/images/videoplay.mp4" type="video/mp4" />
                    <source src="assets/images/videoplay.webm" type="video/webm" />
                    <source src="assets/images/videoplay.ogg" type="video/ogg" />
                  </video>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</>
        )
    }
}

export default VideoStorage
