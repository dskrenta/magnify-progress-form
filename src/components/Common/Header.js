import React from 'react';
import { 
  AppBar, 
  IconButton, 
  IconMenu, 
  MenuItem, 
  Avatar 
} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../images/magnify_progress_dark.png';

const Header = () => (
  <AppBar 
    className='header' 
    title={<img src={logo} className='headerLogo' alt='' />}
    titleStyle={{color: '#243e5d', display: 'flex', justifyContent: 'center'}}
    iconElementLeft={
      <Link to='/manage'>
        <IconButton>
          <ActionHome color='#243e5d' />
        </IconButton>
      </Link>
    }
    iconElementRight={
      <IconMenu
        iconButtonElement={<IconButton style={{padding: 0}}><Avatar>U</Avatar></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText='USERNAME HERE'/>
        <MenuItem primaryText='Help'/>
        <MenuItem primaryText='Support'/>
        <MenuItem primaryText='Settings'/>
        <MenuItem primaryText='Sign out' onClick={this.signOut}/>
      </IconMenu>
    }
  />
)

export default Header;