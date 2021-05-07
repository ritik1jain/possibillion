import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
      <div className="d-flex flex-column bg-slidebar">
  {/* <Link to="/home" className="d-block p-3 text-center link-dark  text-decoration-none">
    <img src="assets/images/logo-icon.png" width="32px" />
  </Link> */}
  <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li className="nav-item">
      <Link to="/channels" className="nav-link py-3">
        <img src="assets/images/tags-icon.png" width="32px" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/events" className="nav-link py-3">
        <img src="assets/images/fav-icon.png" width="32px" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/videostorage" className="nav-link py-3">
        <img src="assets/images/cloud-icon.png" width="32px" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="#" className="nav-link py-3">
        <img src="assets/images/gift-icon.png" width="32px" />
      </Link>
    </li>
    <li className="nav-item">
      <Link to="#" className="nav-link py-3">
        <img src="assets/images/dotted-nav.png" width="32px" />
      </Link>
    </li>
  </ul>
  <div className="dropdown p-3 text-center">
    <span className="name-l">K</span>
  </div>
</div>


        )
    }
}

export default Sidebar
