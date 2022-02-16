import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  height: 90vh;
  width: 100%;
  color: #ffffff;
`;

const FormLeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/wave.svg') no-repeat bottom center;
  background-size: cover;
  width: 70%;
  height: 100%;
`;

const FormRightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/poly.svg') no-repeat top center;
  background-size: cover;
  color: #39393A;
  width: 30%;
  height: 100%;
`;

const FormHeader = styled.h1`
  margin-bottom: 30px;
`;
const FormText = styled.p`
  margin-bottom: 30px;
`;

const FormInput = styled.input`
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  width: 300px;
  /* border-radius: 10px; */
  border-left: 5px solid steelblue;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 3px;
  transition: 0.3s;
  color: #ffffff;
  background-color: rgba(57, 57, 58, 1);
  :focus {
    outline: none;
    border-left: 5px solid #cf4343;
  }
`;

function Form(): ReactElement {
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

export default Form;
