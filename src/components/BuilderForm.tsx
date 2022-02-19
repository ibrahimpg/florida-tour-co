import React, { ReactElement, useState } from 'react';
import Button from './Button';
import {
  FormContainer, FormFullCol, FormHeader, FormText, FormInput, FormTextArea, FormSelect,
} from './Inputs';
import { cities, activities, times } from '../functions/formData';

function BuilderForm(): ReactElement {
  const [inputs, setInputs] = useState({});

  const handleChange = (event: any) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const saveTrip = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvdXJndWlkZSIsImlkIjoiNjIwZmExMGJmODM1NzllMzdlYzFhOTM3IiwiaWF0IjoxNjQ1MjU0MDgxLCJleHAiOjE2NDUyNjg0ODF9.uhavmhI_PAlNixmIWe1VIh7TxHJT5iVE-oRL3wmFMWk';
    const url: string = `${import.meta.env.VITE_API_URL}/api/product/add`;
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    const body = JSON.stringify(inputs);
    console.log(body);
    const response = await fetch(url, { method: 'POST', headers, body });
    console.log(response);
  };

  return (
    <FormContainer style={{ height: 'auto' }}>
      <FormFullCol>
        <FormHeader>Trip Builder</FormHeader>
        <FormText>
          Fill out all of the fields below and click the save button when you are finished.
        </FormText>
        <FormInput type="text" name="tripName" placeholder="Trip Name" onChange={handleChange} />
        <FormTextArea
          name="description"
          maxLength={250}
          placeholder="Short description of trip, important details, etc. (250 characters max)"
          onChange={handleChange}
        />
        <FormSelect name="city" onChange={handleChange}>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </FormSelect>
        <FormSelect name="activity" onChange={handleChange}>
          {activities.map((activity) => (
            <option value={activity}>{activity}</option>
          ))}
        </FormSelect>
        <FormSelect name="time" onChange={handleChange}>
          {times.map((time) => (
            <option value={time}>{time}</option>
          ))}
        </FormSelect>
        <FormText style={{ marginBottom: '8px' }}>
          Trip Start Date:
        </FormText>
        <FormInput name="startDate" type="date" onChange={handleChange} />
        <FormText style={{ marginBottom: '8px' }}>
          Trip End Date:
        </FormText>
        <FormInput name="endDate" type="date" onChange={handleChange} />
        <Button light onClick={() => saveTrip()}>Save</Button>
      </FormFullCol>
    </FormContainer>
  );
}

export default BuilderForm;
