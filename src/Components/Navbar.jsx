import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default function Navbar(props){

    return (
        <nav className={`navbar navbar-expand-lg border navbar-${props.mode} bg-${props.mode} mb-4 mt-0`}>
        <div className="container-fluid">
          <a className="navbar-brand" to="/about">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-a' href="#">{props.aboutText}</a>
              </li>
            </ul>
           
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2 `}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>


           {/* <div className={`form-check form-switch text-${props.mode2==='light'?'dark':'light'} mx-2 `}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode2}  role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable green mode</label>
    </div> */ }
          </div>
        </div>
        
      </nav>

    )
};