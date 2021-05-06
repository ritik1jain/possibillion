import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export class PlatformsLogin extends Component {
    render() {
        return (
            <>
            <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="channels-box">
      <div className="col-md-12 p-0">
        <h1><Link to="/platforms"><span className="rounded back-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true" /></span></Link>Add a new channel</h1>
      </div>
      <div className="col-md-12 p-0 tabs-list">
        <div className="box1"><span className="selected" />Select a Service</div>
        <div className="box2"><span className="active" />Connect the platform</div>
      </div>
      <div className="col-md-12 mt-5">
        <div className="row">
          <div className="platform-box col-md-4">
            <h1>Facebook</h1>
            <div>
              <span className="connect-btn fb btn mb-20">
                Connect Facebook
              </span>
            </div>
          </div>
          <div className="platform-data col-md-8">
            <h1>About</h1>
            <p>Facebook, the world's largest social network, has entered the live streaming game. Facebook Live boasts the largest audience globally, great interactive features for audience members, and filters for customizing live streams. The streaming content on Facebook is as diverse as the platform itself; publishers include everyone from average people to world-famous celebrities.
            </p>
            <p><a href="#">Learn "How to connect Facebook" here.</a></p>
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

export default PlatformsLogin
