import React from 'react';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';

const buttonStyle = {
  width: 'auto',
  marginRight: 30
}

class YesNo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    }
  }

  handleChange = (value) => {
    this.setState({ opened: value });
    if (!value) {
      // RESET RELEVANT INPUT'S VALUE
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{paddingTop: 15}}>
        <RadioButtonGroup name='YesNo' onChange={(e, value) => {this.handleChange(value)}} style={{display: 'flex'}}>
          <RadioButton value={true} label='Yes' style={buttonStyle} />
          <RadioButton value={false} label='No' style={buttonStyle} />
        </RadioButtonGroup>
        {this.state.opened && children}
      </div>
    )
  }
}

export default YesNo;