import React, { ReactElement } from 'react';
import Button from './Button';
import {
  FormContainer, FormLeftCol, FormRightCol, FormHeader, FormText, FormInput,
} from './Inputs';

function SignupForm(): ReactElement {
  return (
    <FormContainer>
      <FormLeftCol>
        <FormHeader>Login To Your Florida Tours Account</FormHeader>
        <FormInput type="text" placeholder="Email Address" />
        <FormInput type="password" placeholder="Password" />
        <Button dark>Log In</Button>
      </FormLeftCol>
      <FormRightCol>
        <FormHeader>Register</FormHeader>
        <FormText>
          Contact us at email@example.org for your Registration ID.
          Then submit the form below.
        </FormText>
        <FormInput type="text" placeholder="Registration ID" />
        <FormInput type="text" placeholder="Desired Username" />
        <Button light>Submit</Button>
      </FormRightCol>
    </FormContainer>
  );
}

export default SignupForm;
