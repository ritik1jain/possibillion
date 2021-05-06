import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import Home from '../pages/Home';
import Channels from '../pages/Channels';
import Events from '../pages/Events';
import Payments from '../pages/Payments';
import PlatformsLogin from '../pages/PlatformsLogin';
import VideoStorage from '../pages/VideoStorage';
import Platforms from '../pages/Platforms';
import PrivateRoute from '../utils/PrivateRoute';

const Routes = () => {
    return (
        <Router>
            <Sidebar />
          <Switch>
          <PrivateRoute path='/home' exact component={Home} />
          <PrivateRoute path='/channels' exact component={Channels} />
          <PrivateRoute path='/events' exact component={Events} />
          <PrivateRoute path='/payments' exact component={Payments} />
          <PrivateRoute path='/platformlogin' exact component={PlatformsLogin} />
          <PrivateRoute path='/videostorage' exact component={VideoStorage} />
          <PrivateRoute path='/platforms' exact component={Platforms} />
          </Switch>
        </Router>
    )
}

export default Routes;


