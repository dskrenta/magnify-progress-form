import React from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    }
  }

  render() {
    const { label, children } = this.props;
    return (
      <div>
        <Checkbox label={label} onCheck={(e, isChecked) => {this.setState({ opened: isChecked })}} />
        {this.state.opened && children}
      </div>
    )
  }
}

export default CheckInput;