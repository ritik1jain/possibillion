import React, { Component } from 'react'

class EventsEmpty extends Component {
    render() {
        return (
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="video-starage-box">
      <h1>Events</h1>
      <div className="upload-starage-box video-upload-tabs">
        <div className="col-md-12 p-0">
          <h1>Schedule an Event</h1>
          <p>Let your audience know when you plan to go live.</p>
          <button data-bs-toggle="modal" data-bs-target="#events-creation" className="btn add-channel">+ Schedule Live Event</button>
        </div>
      </div>
    </div>
  </div>
</main>

        )
    }
}

export default EventsEmpty
