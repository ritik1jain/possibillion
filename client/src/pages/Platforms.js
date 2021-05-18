import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export class Platforms extends Component {
  constructor(props) {
    super(props);
    this.state={
      platforms: []
    }
    this.platformList = this.platformList.bind(this);
  }
  
  platformList() {
    const list = this.state.platforms.map(e => 
        <div key={e.id} className="channel-item-box">
            <div className="channel-item">
              <Link to={`/platformsLogin/${e.name}`}>
                <figure><img src={e.image.png} /></figure>
                <h6>{e.name}</h6>
              </Link>
            </div>
          </div>

    );
    return list;

  }

  async componentDidMount() {
    const res = await axios.get("https://api.restream.io/v2/platform/all");
    this.setState({platforms: res.data});
  }

    render() {
      const platformslist = this.platformList();
      console.log(platformslist);
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
          {platformslist}
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
