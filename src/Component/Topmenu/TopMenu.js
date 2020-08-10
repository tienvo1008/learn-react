import React, { Component } from 'react';

export default class TopMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="facebook.com">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="facebook.com">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="facebook.com">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
      // <div>
      //   skdsjahdasdhaskdhjk
      // </div>
      // <div>
      //   <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
      //     <div className="card-header">Header</div>
      //     <div className="card-body">
      //        fmdnsfnsdmfnsdnf,sdnfmn
        
      //     </div>
      //   </div>
        
      // </div>
    );
  }
}
