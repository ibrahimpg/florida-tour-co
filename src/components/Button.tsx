import styled from 'styled-components';

interface ButtonProps {
  text?: boolean;
  icon?: boolean;
  light?: boolean;
  dark?: boolean;
}

const Button = styled.div<ButtonProps>`
  z-index: 2;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1.88px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  font-size: 12px;
  transition: 0.2s;
  height: 40px;
  width: 130px;
  border-radius: 25px;
  ${(props) => props.icon && 'width: 35px; height: 35px; border-radius: 50%;'}
  ${(props) => props.light && 'color: #ffffff; background-color: hsl(0, 59%, 54%);'}
  ${(props) => props.dark && 'color: #000000; background-color: hsl(0, 0%, 95%);'}
  :hover {
    ${(props) => props.light && 'color: #ffffff; background-color: hsl(0, 59%, 58%);'}
    ${(props) => props.dark && 'color: #000000; background-color: hsl(0, 0%, 85%);'}
  }
`;

export default Button;
