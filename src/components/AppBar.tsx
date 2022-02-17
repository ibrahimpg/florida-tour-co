import styled from 'styled-components';

interface AppBarProps {
  dark?: boolean;
}

const AppBar = styled.div<AppBarProps>`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  color: #F1F1F1;
  background-color: #39393A;
  ${(props) => props.dark && 'color: #f1f1f1; background-color: steelblue;'}
`;

interface AppBarSectionProps {
  start?: boolean | string;
  mid?: boolean | string;
  end?: boolean | string;
}

const AppBarSection = styled.div<AppBarSectionProps>`
  display: flex;
  align-items: center;
  ${(props) => props.start && 'justify-content: flex-start;'}
  ${(props) => props.mid && 'justify-content: center;'}
  ${(props) => props.end && 'justify-content: flex-end;'}
`;

const AppBarHamburger = styled.div`
  font-size: 28px;
  cursor: pointer;
  line-height: 1;
  margin-right: 10px;
  color: #ffffff;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  :hover {
    background-color: #454546c9;
    transform: rotate(45deg);
  }
`;

const AppBarHeader = styled.h1`
  font-size: 24px;
  margin: 0 15px;
`;

export {
  AppBar, AppBarSection, AppBarHamburger, AppBarHeader,
};
