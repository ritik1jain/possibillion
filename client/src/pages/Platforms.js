import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export class Platforms extends Component {
    render() {
        return (
            <>
            <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="channels-box">
      <div className="col-md-12 p-0">
        <h1>Add a new channel</h1>
      </div>
      <div className="col-md-12 p-0 tabs-list">
        <div className="box1"><span className="active" />Select a Service</div>
        <div className="box2"><span />Connect the platform</div>
      </div>
      <div className="col-md-12 mt-5">
        <div className="row">
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/fb-page.png" /></figure>
                <h6>Facebbok</h6>
              </Link></div></div>
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/fb-group.png" /></figure>
                <h6>Facebbok</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/fb-profile.png" /></figure>
                <h6>Facebbok</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/youtube.png" /></figure>
                <h6>Youtube</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/periscope.png" /></figure>
                <h6>Periscope</h6></Link>
            </div>
          </div>
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platformlogin">
                <figure><img src="assets/images/linkdin-page.png" /></figure>
                <h6>Linkedin</h6>
              </Link></div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platformlogin">
                <figure><img src="assets/images/lindin-event.png" /></figure>
                <h6>Linkedin</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platformlogin">
                <figure><img src="assets/images/linkdin-profile.png" /></figure>
                <h6>Linkedin</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platformlogin">
                <figure><img src="assets/images/twitch-logo.png" /></figure>
                <h6>Twitch</h6></Link>
            </div></div>
        </div>
      </div>
    </div>
  </div>
</main>
</>
        )
    }
}

export default Platforms
