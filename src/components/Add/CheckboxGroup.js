import React from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
  }

  onChange = (item, isChecked) => {
    let newSelection = [];

    if (isChecked) {
      newSelection = this.state.selected.concat(item);
    } 
    else {
      newSelection = this.state.selected.filter((topic) => topic !== item);
    }

    this.setState({ selected: newSelection });
    this.props.input.onChange(newSelection);
  }

  render() {
    const { items } = this.props;
    return (
      <div className='checkboxContain'>
        {items && items.map((topic, index) => (
          <Checkbox 
            key={index} 
            label={topic} 
            onCheck={(e, isChecked) => {this.onChange(topic, isChecked)}} 
            style={{
              width: '33%',
              minWidth: '200px',
              paddingRight: 20,
              paddingTop: 10,
              boxSizing: 'border-box'
            }}
            labelStyle={{width: 'auto'}}
            iconStyle={{marginRight: 10}}
          />
        ))}
      </div>
    )
  }
}

export default CheckboxGroup;