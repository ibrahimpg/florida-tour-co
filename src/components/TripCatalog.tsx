import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { VscTrash, VscEye } from 'react-icons/vsc';
import Button from './Button';

const TripCardOuterContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
`;

const TripCardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 760px) {
    grid-template-columns: auto;
  }
`;

const TripCard = styled.div`
  border-radius: 10px;
  text-align: center;
  display: flex;
  font-size: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 15px 0 15px;
  height: 210px;
  max-width: 300px;
  width: 100%;
  background-color: rgba(57, 57, 58, 0.94);
  position: relative;
  color: #ffffff;
  @media only screen and (max-width: 760px) {
    height: 240px;
  }
`;

const TripCardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const TripCardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #39393A;
  padding: 0 15px;
  border-radius: 0 0 10px 10px;
`;

interface tripItem {
  _id: string;
  tripName: string;
  description: string;
  city: string;
  activity: string;
  time: string;
  startDate: string;
  endDate: string;
}

interface Props {
  tripsArray: tripItem[];
  deleteTrip: Function;
  viewTrip: Function;
}

function TripCatalog({ tripsArray, deleteTrip, viewTrip }: Props): ReactElement {
  return (
    <TripCardOuterContainer>
      <TripCardContainer>
        {tripsArray.map((x) => (
          <TripCard key={x._id}>
            <TripCardTitle>
              {x.tripName}
            </TripCardTitle>
            {x.description.length > 50 ? `${x.description.slice(0, 50)}...` : x.description}
            <TripCardButtons>
              <Button light icon onClick={() => deleteTrip(x._id)}>
                <VscTrash size="2em" />
              </Button>
              <Button dark icon onClick={() => viewTrip(x._id)}>
                <VscEye size="2em" />
              </Button>
            </TripCardButtons>
          </TripCard>
        ))}
      </TripCardContainer>
    </TripCardOuterContainer>
  );
}

export default TripCatalog;
