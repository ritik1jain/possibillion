import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

class Channels extends Component {
    render() {
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="channels-box">
      <div className="col-md-12 p-0">
        <h1>Welcome to Meandor!</h1>
        <p>Add channels and start streaming.</p>
        <Link to="/platforms"><button className="btn add-channel">+ Add Channel</button></Link>
      </div>
      <div className="col-md-12 mt-5">
        <p className="text-mute">Suggestions</p>
        <div className="row">
          <div className="channel-item-box">
            <div className="channel-item">
              <Link to="/platforms">
                <figure><img src="assets/images/fb-page.png" /></figure>
                <h6>Facebbok</h6>
              </Link></div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platforms">
                <figure><img src="assets/images/fb-group.png" /></figure>
                <h6>Youtube</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platforms">
                <figure><img src="assets/images/fb-profile.png" /></figure>
                <h6>LinkedIn</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platforms">
                <figure><img src="assets/images/fb-profile.png" /></figure>
                <h6>twitch</h6></Link>
            </div></div>
          <div className="channel-item-box">
            <div className="channel-item"><Link to="/platforms">
                <figure><img src="assets/images/fb-profile.png" /></figure>
                <h6>kuku</h6></Link>
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

export default Channels
