import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { VscTrash, VscEye, VscCopy } from 'react-icons/vsc';
import Button from './Button';

const TripCardOuterContainer = styled.div`
  background: url('/widepoly.svg') no-repeat top center;
  background-size: cover;
  width: calc(100% - 40px);
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const TripCardContainer = styled.div`
  display: grid;
  margin: 20px;
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0 0 0;
  height: 190px;
  width: 300px;
  background-color: rgba(57, 57, 58, 0.94);
  position: relative;
  color: #ffffff;
`;

const TripCardTitle = styled.h2`
  font-size: 20px;
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
  id: string;
  title: string;
  dates: string;
}

interface Props {
  tripsArray: tripItem[];
}

function TripCatalog({ tripsArray }: Props): ReactElement {
  return (
    <TripCardOuterContainer>
      <TripCardContainer>
        {tripsArray.map((x) => (
          <TripCard>
            <TripCardTitle>
              {x.title}
            </TripCardTitle>
            {x.dates}
            <TripCardButtons>
              <Button light icon>
                <VscTrash size="2em" />
              </Button>
              <Button dark icon>
                <VscCopy size="2em" />
              </Button>
              <Button dark icon>
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
