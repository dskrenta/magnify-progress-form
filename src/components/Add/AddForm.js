import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import ImageUpload from './ImageUpload';
import CheckboxGroup from './CheckboxGroup';
import Question from './Question';
import './Question.css';

const fieldProps = {
  style: {
    width: '100%'
  },
  multiLine: true
}

const sampleTopics = ['Healthcare','Education','Womens Issues','Environment','Tax Budget','Climate Change','Foreign Relations','Gun Control'];

class AddForm extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Question label='Title' required>
          <Field
            name='title'
            type='text'
            component={TextField}
            placeholder='Title'
            props={fieldProps}
          />
        </Question>
        <Question label='Topics (Check all that apply)' required>
          <Field 
            name='topics'
            component={CheckboxGroup}
            items={sampleTopics}
          />
        </Question>
        <Question label='Description' required>
          <Field
            name='description'
            type='text'
            component={TextField}
            placeholder='Description'
            props={fieldProps}
          />
        </Question>
        <Question label='Image (jpg or png)' required>
          <Field
            name='image'
            type='file'
            component={ImageUpload}
          />
          <Field 
            name='imageUrl'
            component={TextField}
            placeholder='Image URL (optional)'
            props={fieldProps}
          />
          <Field 
            name='imageUrlDescription'
            component={TextField}
            placeholder='URL Description (optional)'
            props={fieldProps}
          />
        </Question>
        <Question label='Action Type' required />
        <Question label='' />
        <Question label='' />
        <Question label='' />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'add'
})(AddForm);