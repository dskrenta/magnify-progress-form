import React from 'react';
import AppBar from 'material-ui/AppBar';

import './Manage.css';

const Manage = () => (
  <div>
    <AppBar 
      className='manageHeader' 
      title='Magnify Progress' 
      showMenuIconButton={false} 
    />
    <div className='manageContain'>
      Manage
    </div>
  </div>
);

export default Manage;