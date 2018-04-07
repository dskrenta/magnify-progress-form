import React from 'react';

class ImageUpload extends React.Component{
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { input: { onChange } } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    return (
      <div style={{paddingTop: 15}}>
        <input
          type='file'
          accept='.jpg, .png'
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default ImageUpload;