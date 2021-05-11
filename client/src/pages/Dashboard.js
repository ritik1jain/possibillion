import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export class Dashboard extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <main className="col-md-12 col-lg-12 cont-gap main-data">
                <div className="row">
                <Link to="/home">Live studio</Link>
                </div>
                </main>
            </>
        )
    }
}

export default withRouter(Dashboard);
