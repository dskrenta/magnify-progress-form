import React from 'react';

import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { label='', required=false, children } = this.props;
    return (
      <div className='questionContain'>
        <h3 className='questionLabel'>{label}{required && <span style={{color: 'red'}}> *</span>}</h3>
        {children}
      </div>
    )
  }
}

export default Question;