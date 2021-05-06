import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

// import 'assets/css/bootstrap-datetimepicker.min.css';

class Events extends Component {
    render() {
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="video-starage-box">
      <h1>Events<span><button data-bs-toggle="modal" data-bs-target="#events-creation" className="btn"><i className="fa fa-upload" aria-hidden="true" /> Create Event</button></span></h1>
      <div className="upload-starage-box video-upload-tabs">
        <div className="row">
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box-row">
              <div className="img">
                <img src="assets/images/screen-share.png" className="img-fluid" />
              </div>
              <div className="data">
                <h3>Lorem Ipsum is simply</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>
                  <span className="icon-btn" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Delete"><i className="fa fa-trash-o" aria-hidden="true" /></span>
                  <span className="icon-btn" title="Invite Friends"><i className="fa fa-user-plus" aria-hidden="true" /></span>
                  <Link to="/home"><span className="btn rtmp-btn live-studeo">Live Studio</span></Link> 
                  <span className="btn rtmp-btn">RTMP Settings</span>
                </p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div></div></main>
</>
        )
    }
}

export default Events
