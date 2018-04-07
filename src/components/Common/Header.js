import React from 'react';
import AppBar from 'material-ui/AppBar';

import './Header.css';
import logo from '../../images/magnify_progress_dark.png';

const Header = () => (
  <AppBar 
    className='header' 
    title={<img src={logo} className='headerLogo' alt='' />}
    titleStyle={{color: '#243e5d', display: 'flex', justifyContent: 'center'}}
    showMenuIconButton={false} 
  />
)

export default Header;