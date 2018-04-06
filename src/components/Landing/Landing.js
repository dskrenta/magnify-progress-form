import React from 'react';

import FacebookLoginButton from '../Common/FacebookLoginButton';

import './Landing.css';
import logo from '../../images/magnify_progress_dark.png';

const Landing = () => (
  <div className='landingContain'>
    <img src={logo} className='landingLogo' alt='' />
    <h2 className='landingMotto'>Seamlessly create your own actions.</h2>
    <FacebookLoginButton />
  </div>
);

export default Landing;