import React, { Component } from 'react'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">From Downtown</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Comprehensive Guide to Building Out Your Fantasy Basketball Team</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Build My Team</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default LandingPage