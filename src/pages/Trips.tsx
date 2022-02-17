import React from 'react';
import PageContainer from '../components/Containers';
import TripCatalog from '../components/TripCatalog';

const tripsArray = [
  {
    id: '1',
    title: 'Tampa Tour',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '2',
    title: 'Miami Jet Ski',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '3',
    title: 'Orlando Bloomingdale',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '4',
    title: 'Disneyland Tour',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '2',
    title: 'Miami Jet Ski',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '3',
    title: 'Orlando Bloomingdale',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '4',
    title: 'Disneyland Tour',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '5',
    title: 'Disneylad All Expenses Whatever',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '6',
    title: 'Another Long Title Name',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '4',
    title: 'Disneyland Tour',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '5',
    title: 'Disneylad All Expenses Whatever',
    dates: '2/17/2022 to 2/19/2022',
  },
  {
    id: '6',
    title: 'Another Long Title Name',
    dates: '2/17/2022 to 2/19/2022',
  },
];

function Trips() {
  return (
    <PageContainer style={{ background: "url('/wave.svg') no-repeat bottom center", backgroundSize: 'cover' }}>
      <TripCatalog tripsArray={tripsArray} />
    </PageContainer>
  );
}

export default Trips;
