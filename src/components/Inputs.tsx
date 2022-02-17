import styled from 'styled-components';

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  min-height: 90vh;
  height: 0;
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
  flex: 1;
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

const FormFullCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/poly.svg') no-repeat top center;
  background-size: cover;
  color: #39393A;
  width: 100%;
  height: 100%;
`;

const FormHeader = styled.h1`
  margin-bottom: 30px;
`;

const FormText = styled.p`
  margin-bottom: 30px;
  max-width: 300px;
  width: 100%;
`;

const FormInput = styled.input`
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 300px;
  width: 100%;
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
  ::placeholder {
    color: #ffffff;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }
`;

const FormTextArea = styled.textarea`
  display: flex;
  height: 145px;
  resize: none;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 300px;
  width: 100%;
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
  ::placeholder {
    color: #ffffff;
  }
`;

const FormSelect = styled.select`
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

export {
  FormContainer,
  FormLeftCol,
  FormRightCol,
  FormFullCol,
  FormHeader,
  FormText,
  FormInput,
  FormTextArea,
  FormSelect,
};
