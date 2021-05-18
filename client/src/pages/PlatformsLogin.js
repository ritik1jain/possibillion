import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../constants/apiContants';


export class PlatformsLogin extends Component {
  constructor(props){
    super(props);
    
    this.state ={
      isLoggedIn : false,
      access_token : '',
      data : {
        id : '',
        secure_url: ''
      },
      platform: {}
 
    };
this.componentClicked = this.componentClicked.bind(this);
this.responseFacebook = this.responseFacebook.bind(this);
this.redirectToHome = this.redirectToHome.bind(this);
this.getData = this.getData.bind(this);
this.onFailure = this.onFailure.bind(this);
this.onSuccess = this.onSuccess.bind(this);
this.refreshTokenSetup = this.refreshTokenSetup.bind(this);

  }

  
  async componentDidMount(){

    console.log(this.props.match.params.name);
    const res = await axios.get(API_BASE_URL+`/platform/${this.props.match.params.name}`)
    this.setState({
      platform: {...res.data}
    })
  
  }
  

  componentClicked = () => {
    console.log("clicked");
  }

  responseFacebook = async (response) => {
    console.log(response);
    if(response.accessToken){
      this.setState({
        access_token : response.accessToken,
        isLoggedIn : true
      })
      const res = await axios.post(`https://graph.facebook.com/v3.3/me/live_videos?status=LIVE_NOW&access_token=${this.state.access_token}`);
      console.log(res.data);
      this.setState({
       data: {
         id: res.data.id,
         secure_url: res.data.stream_url
       },

      })
      this.redirectToHome(this.props);

    }
    
  }
  redirectToHome = (props) => {
    props.updateData(this.state.data);
    props.history.push('/dashboard');
}


onSuccess = async (res) => {
  if(res.accessToken){
    this.setState({
      access_token : res.accessToken,
      isLoggedIn : true
    })
    // const validate = await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${this.state.access_token}`)
    
    
    const config = {
      headers: {Authorization: `Bearer ${this.state.access_token}` }
    };

    const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=id&mine=true`,
    config);
    console.log(response.data);
    // this.setState({
    //  data: {
    //    id: res.data.id,
    //    secure_url: res.data.secure_stream_url
    //  },

    // })
    this.redirectToHome(this.props);

  }
  
  this.refreshTokenSetup(res);
};

refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};


onFailure = (res) => {
  console.log('Login failed', res);
};


getData = () => {
const clientId = '683420745760-9p003ioa0p45a6uo9s9fdgl2l8i8hl0s.apps.googleusercontent.com';

  return (
    <div className="row">
          <div className="platform-box col-md-4">
            <h1>{this.state.platform.name}</h1>
            <div>
            {/* <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <span className="connect-btn fb btn mb-20" onClick={renderProps.onClick}>Connect Youtube</span>
              )}
              scope="profile email https://www.googleapis.com/auth/youtube"
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            /> */}
              <FacebookLogin
                appId="458651025200621"
                autoLoad={true}
                fields="name,email,picture"
                scope="publish_video, pages_manage_posts,pages_read_engagement,publish_to_groups"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                render={renderProps => (
                  <span className="connect-btn fb btn mb-20" onClick={renderProps.onClick}>{`Connect ${this.state.platform.name}`}</span>
                )}
                />
            </div>
          </div>
          <div className="platform-data col-md-8">
            <h1>About</h1>
            <p>{this.state.platform.about}
            </p>
            <p><a href="#">{`Learn How to connect ${this.state.platform.name} here.`}</a></p>
          </div>
        </div>
  )
};


    render() {
      // const data = this.getData();
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
            <h1>{this.state.platform.name}</h1>
            <div>
            {/* <GoogleLogin
              clientId={clientId}
              render={renderProps => (
                <span className="connect-btn fb btn mb-20" onClick={renderProps.onClick}>Connect Youtube</span>
              )}
              scope="profile email https://www.googleapis.com/auth/youtube"
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            /> */}
              <FacebookLogin
                appId="458651025200621"
                autoLoad={true}
                fields="name,email,picture"
                scope="publish_video, pages_manage_posts,pages_read_engagement,publish_to_groups"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                render={renderProps => (
                  <span className="connect-btn fb btn mb-20" onClick={renderProps.onClick}>{`Connect ${this.state.platform.name}`}</span>
                )}
                />
            </div>
          </div>
          <div className="platform-data col-md-8">
            <h1>About</h1>
            <p>{this.state.platform.about}
            </p>
            <p><a href="#">{`Learn How to connect ${this.state.platform.name} here.`}</a></p>
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

export default withRouter(PlatformsLogin)
