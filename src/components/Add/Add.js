import React from 'react';

import Header from '../Common/Header';
import AddForm from './AddForm';

import './Add.css';

const Add = () => {
  const onSubmit = (values) => {
    console.log(values);
  }
  
  return (
    <div>
      <Header />
      <div className='formContain'>
        <AddForm onSubmit={onSubmit} />
      </div>
    </div>
  )
};

export default Add;