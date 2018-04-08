import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, RadioButtonGroup, DatePicker } from 'redux-form-material-ui';
import { RadioButton } from 'material-ui/RadioButton';

import CheckInput from './CheckInput';
import YesNo from './YesNo';
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
            placeholder='Image URL (if no file)'
            props={fieldProps}
          />
          <Field 
            name='imageUrlDescription'
            component={TextField}
            placeholder='URL Description (if no file)'
            props={fieldProps}
          />
        </Question>
        <Question label='Action Type' required>
          <div style={{paddingTop: 15}}>
            <Field 
              name='actionType'
              component={RadioButtonGroup}
            >
              <RadioButton value='Call' label='Call' />
              <RadioButton value='Donate' label='Donate' />
              <RadioButton value='Volunteer' label='Volunteer' />
              <RadioButton value='Event' label='Event' />
              <RadioButton value='Learning' label='Learning' />
            </Field>
          </div>
        </Question>
        <Question label='Does this action have an end date, or a date you want to stop showing it to users?'>
          <YesNo>
            <Field 
              name='endDate'
              component={DatePicker}
              format={(value, name) => (value === '' ? null : value)}
              placeholder='End Date'
              textFieldStyle={fieldProps}
            />
          </YesNo>
        </Question>
        <Question label='Are there any bills, representatives, or committees you want to link to the action?'>
          <div style={{paddingTop: 15}}>
            <CheckInput label='Bills'>
              <Field 
                name='bills'
                component={TextField}
                placeholder='Bills'
              />
            </CheckInput>
            <CheckInput label='Reps'>
              <Field 
                name='reps'
                component={TextField}
                placeholder='Reps'
              />
            </CheckInput>
            <CheckInput label='Committees'>
              <Field 
                name='committees'
                component={TextField}
                placeholder='Committees'
              />
            </CheckInput>
          </div>
        </Question>
        <Question label='Does your action depend on location information?'>
          <div style={{paddingBottom: 20}}>
            <YesNo>
              <div style={{paddingLeft: 20, paddingBottom: 10, marginTop: 15, border: '1px solid #ddd'}}>
                <Question label='Do you want to only show the action to a specific set of representatives?'>
                  <YesNo>
                    <Field 
                      name='locationReps'
                      component={TextField}
                      placeholder='Related Reps'
                    />
                  </YesNo>
                </Question>
                <Question label='Do you want to only show the action to people in specific states?'>
                  <YesNo>
                    <Field 
                      name='locationStates'
                      component={TextField}
                      placeholder='Related States'
                    />
                  </YesNo>
                </Question>
                <Question label='Do you want to only show the action to people in specific districts?'>
                  <YesNo>
                    <Field 
                      name='locationDistricts'
                      component={TextField}
                      placeholder='Related Districts'
                    />
                  </YesNo>
                </Question>
                <Question label='Is the action an event with an address?'>
                  <YesNo>
                    <Field 
                      name='locationAddress'
                      component={TextField}
                      placeholder='Event Address'
                    />
                  </YesNo>
                </Question>
              </div>
            </YesNo>
          </div>
        </Question>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'add'
})(AddForm);