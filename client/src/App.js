import React, {useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Channels from './pages/Channels';
import Events from './pages/Events';
import Payments from './pages/Payments';
import PlatformsLogin from './pages/PlatformsLogin';
import VideoStorage from './pages/VideoStorage';
import Platforms from './pages/Platforms';

import AlertComponent from './components/AlertComponent/AlertComponent';
import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Routes from './components/Routes';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  
  return (
    <>
      <Router> 
         <Switch>
          <Route path="/" exact={true}>
            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route path="/register">
            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route path="/login">
            <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <PrivateRoute path='/home' exact component={Home} />
          <PrivateRoute path='/channels' exact component={Channels} />
          <PrivateRoute path='/events' exact component={Events} />
          <PrivateRoute path='/payments' exact component={Payments} />
          <PrivateRoute path='/platformlogin' exact component={PlatformsLogin} />
          <PrivateRoute path='/videostorage' exact component={VideoStorage} />
          <PrivateRoute path='/platforms' exact component={Platforms} />
        </Switch>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        
      </Router>
    </>
  );
}

export default App;
