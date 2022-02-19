import React, { ReactElement } from 'react';
import styled from 'styled-components';

const PopupLayout = styled.div`
  z-index: 6;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  height: 50vh;
  width: 40vw;
  padding: 50px;
  background-color: #ffffff;
  position: fixed;
  top: 25vh;
  left: -20vw;
`;

interface Props {
  tripName: string;
  description: string;
  city: string;
  activity: string;
  time: string;
  startDate: string;
  endDate: string;
  popupXPos: string;
}

function Popup({
  tripName, description, city, activity, time, startDate, endDate, popupXPos,
}: Props): ReactElement {
  return (
    <PopupLayout style={{ left: popupXPos }}>
      <b>{tripName}</b>
      {`${city} - ${activity}`}
      <br />
      <br />
      {description}
      <br />
      <br />
      {startDate}
      {' to '}
      {endDate}
      {` (${time})`}
    </PopupLayout>
  );
}

export default Popup;
