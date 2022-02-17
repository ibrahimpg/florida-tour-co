import React, { ReactElement } from 'react';
import Button from './Button';
import {
  FormContainer, FormFullCol, FormHeader, FormText, FormInput, FormTextArea, FormSelect,
} from './Inputs';
import { cities, activities, times } from '../functions/formData';

function BuilderForm(): ReactElement {
  return (
    <FormContainer style={{ height: 'auto' }}>
      <FormFullCol>
        <FormHeader>Trip Builder</FormHeader>
        <FormText>
          Fill out all of the fields below and click the save button when you are finished.
        </FormText>
        <FormInput type="text" placeholder="Trip Name" />
        <FormTextArea maxLength={250} placeholder="Short description of trip, important details, etc. (250 characters max)" />
        <FormSelect name="cities">
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </FormSelect>
        <FormSelect name="activities">
          {activities.map((activity) => (
            <option value={activity}>{activity}</option>
          ))}
        </FormSelect>
        <FormSelect name="times">
          {times.map((time) => (
            <option value={time}>{time}</option>
          ))}
        </FormSelect>
        <FormText style={{ marginBottom: '8px' }}>
          Trip Start Date:
        </FormText>
        <FormInput type="date" />
        <FormText style={{ marginBottom: '8px' }}>
          Trip End Date:
        </FormText>
        <FormInput type="date" />
        <Button light>Save</Button>
      </FormFullCol>
    </FormContainer>
  );
}

export default BuilderForm;
