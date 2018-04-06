import React from 'react';
import AppBar from 'material-ui/AppBar';

import logo from '../../images/magnify_progress_dark.png';
import './Manage.css';

const sampleActions = [
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1'
  },
  {
    title: 'Call your rep fourteen timesin a row until they block you',
  },
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1'
  },
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1'
  }
];

const Manage = () => (
  <div>
    <AppBar 
      className='manageHeader' 
      title={<img src={logo} className='headerLogo' alt='' />}
      titleStyle={{color: '#243e5d', display: 'flex', justifyContent: 'center'}}
      showMenuIconButton={false} 
    />
    <div className='actionsContain'>
      {sampleActions.map((action, index) => (
        <div key={index} className='actionItem'>
          <div className='actionCard'>
            {'image' in action && <img src={action.image} className='actionItemImage' alt='' />}
            <h2 className='actionItemTitle'>{action.title}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Manage;