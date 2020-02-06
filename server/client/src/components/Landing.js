import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Media,
  Container
 } from 'react-bootstrap';

import CircleRight2 from '../assets/images/circled-right-2.png'
import HomeIcon from '../assets/images/homeIcon.png';
import Logo from '../assets/images/MYtineraryLogo.png';


class Landing extends Component {
    render() {
        return (
            <Container className="container">
              {/* Logo */}
              <Media>
                <img className="logo" src={ Logo } alt="MYTinerary Logo" />
              </Media>

              {/* Browse cities */}
              <div className="browse-cities text-center">
                <p>Find your perfect trip, designed by insiders who know and love their
                  cities.</p>
                <p>Start browsing</p>
                <Media>
                  <Link to="/cities/all">
                    <img className="browse-btn" src={ CircleRight2 } alt="Browse cities button" fluid="true" />
                  </Link>
                  
                </Media>
              </div>

              {/* Log in || Create Account */}
              <div className="text-center build-itinerary ">
                <p>Want to build your own MYtinerary?</p>
                <div>
                  <Link to='/login'>Log in</Link>
                  <Link to='/users/'>Create Account</Link>
                </div>
              </div>

              <Media>
                <img className="home-icon" src={ HomeIcon } alt="" />
              </Media>

            </Container>
        );
    }
}

export default Landing;
