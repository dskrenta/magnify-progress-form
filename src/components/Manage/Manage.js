import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Common/Header';

import './Manage.css';

const sampleActions = [
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1',
    tags: ['Call','Your','Representative']
  },
  {
    title: 'Call your rep fourteen timesin a row until they block you',
    tags: ['Call','Your','Representative']
  },
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1',
    tags: ['Call','Your','Representative']
  },
  {
    title: 'Call your rep',
    image: 'https://techcrunch.com/wp-content/uploads/2017/01/usa-phone.png?w=1390&crop=1',
    tags: ['Call','Your','Representative']
  }
];

const Manage = () => (
  <div>
    <Header />
    <div className='actionsContain'>
      {sampleActions.map((action, index) => (
        <div key={index} className='actionItem'>
          <div className='actionCard'>
            <Link to='/add' style={{textDecoration: 'none'}}>
              <div className='innerActionCard'>
                {'image' in action 
                  && <img src={action.image} className='actionItemImage' alt='' />}
                <h2 className='actionItemTitle'>{action.title}</h2>
                {'tags' in action 
                  && (<div className='actionItemTagsContain'>
                    {action.tags.map((tag, idx) => (
                      <div key={idx} className='actionItemTag'>{tag}</div>
                    ))}
                  </div>)
                }
              </div>
            </Link>
          </div>
        </div>
      ))}
      <div className='actionItem'>
        <Link to='/add' style={{textDecoration: 'none', margin: 'auto'}}>
          <div className='addActionButton'>
            <h3><span>+</span><br/>Create Action</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Manage;