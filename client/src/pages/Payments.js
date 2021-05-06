import React, { Component } from 'react'
import Sidebar from '../components/sidebar/Sidebar';

export class Payments extends Component {
    render() {
        return (
          <>
          <Sidebar />
<main className="col-md-12 col-lg-12 cont-gap main-data">
  <div className="row">
    <div className="video-starage-box">
      <h1>Payments </h1>
      <div className="payments-boxes">
        <div className="choose-plan">
          <p><span><input type="radio" name="price" defaultValue="Monthly" defaultChecked /> <lalel>Monthly</lalel></span> 
            <span><input type="radio" name="price" defaultValue="Yearly" /> Yearly</span></p>
          <p>Choose the plan that is right for you</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5>Company plans</h5>
            <div className="row">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="price-head card-header">
                    <h4 className="my-0 fw-normal">Premium</h4>
                  </div>
                  <div className="price-list card-body">
                    <h1 className="card-title pricing-card-title">$99<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30+ platforms. 1 channel per platform</li>
                      <li>10 Custom/Extra destinations</li>
                      <li>Stream pre-recorded videos</li>
                      <li>Recording - 20 hrs/stream, stored for 30 days</li>
                      <li>Video Storage - 25 videos of up to 2 hours/5 Gb</li>
                      <li>more features</li>
                    </ul>
                    <button type="button" className="btn get-plan btn-primary">Get Plan</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="price-head card-header">
                    <h4 className="my-0 fw-normal">Business</h4>
                  </div>
                  <div className="card-body price-list">
                    <h1 className="card-title pricing-card-title">$299<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30+ platforms. 1 channel per platform</li>
                      <li>20 Custom/Extra destinations</li>
                      <li>Stream pre-recorded videos</li>
                      <li>Recording - 20 hrs/stream, stored for 30 days</li>
                      <li>Video Storage - 50 videos of up to 4 hours/10 Gb</li>
                      <li>more features</li>
                    </ul>
                    <button type="button" className="btn get-plan btn-primary">Get Plan</button>
                  </div>
                </div>
              </div>
            </div></div>
          <div className="col-lg-6">
            <h5>Individual Plans <span>(For personal content streaming only)</span></h5>
            <div className="row">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="price-head card-header">
                    <h4 className="my-0 fw-normal">Standard</h4>
                  </div>
                  <div className="price-list card-body">
                    <h1 className="card-title pricing-card-title">$19<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30+ platforms. 1 channel per platform</li>
                      <li>1 Custom/Extra destinations</li>
                      <li>Recording - 6 hrs/stream, stored for 15 days</li>
                      <li>Streaming to Facebook public pages/groups</li>
                      <li>10 on-screen participants in Studio</li>
                      <li>more features</li>
                    </ul>
                    <button type="button" className="btn get-plan btn-primary">Get Plan</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="price-head  card-header">
                    <h4 className="my-0 fw-normal">Professional</h4>
                  </div>
                  <div className="price-list card-body">
                    <h1 className="card-title pricing-card-title">$49<small className="text-muted fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30+ platforms. 1 channel per platform</li>
                      <li>3 Custom/Extra destinations</li>
                      <li>Stream pre-recorded videos</li>
                      <li>Recording - 10 hrs/stream, stored for 15 days</li>
                      <li>Video Storage - 10 videos of up to 1 hour/2 Gb</li>
                      <li>more features</li>
                    </ul>
                    <button type="button" className="btn get-plan btn-primary">Get Plan</button>
                  </div>
                </div>
              </div>
            </div></div>
          <div>
          </div>
        </div>
      </div>
    </div></div></main>
   </>
        )
    }
}

export default Payments
