import React, { ReactElement, useState, useContext } from 'react';
import Button from './Button';
import {
  FormContainer, FormLeftCol, FormRightCol, FormHeader, FormText, FormInput,
} from './Inputs';
import { UpdateUserContext } from '../context/UserContext';

function SignupForm(): ReactElement {
  const [inputs, setInputs] = useState({});
  const { login } = useContext(UpdateUserContext)!;

  const handleChange = (event: any) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const notAvailable = () => {
    // eslint-disable-next-line no-alert
    alert('This functionality does not exist on the demo version of this app.');
  };

  return (
    <FormContainer>
      <FormLeftCol>
        <FormHeader>Login To Your Florida Tours Account</FormHeader>
        <FormInput type="text" name="username" id="username" onChange={handleChange} placeholder="Username" />
        <FormInput type="password" name="password" id="password" onChange={handleChange} placeholder="Password" />
        <Button dark onClick={() => login(inputs)}>Log In</Button>
      </FormLeftCol>
      <FormRightCol>
        <FormHeader>Register</FormHeader>
        <FormText>
          Contact us at email@example.org for your Registration ID.
          Then submit the form below.
        </FormText>
        <FormInput type="text" placeholder="Registration ID" />
        <FormInput type="text" placeholder="Desired Username" />
        <Button light onClick={() => notAvailable()}>Submit</Button>
      </FormRightCol>
    </FormContainer>
  );
}

export default SignupForm;
