import React, { useEffect } from 'react';
import { Layout, Container } from '../components/Containers';
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
  useEffect(() => {
    const fetchTrips = async () => {
      const url: string = `${import.meta.env.VITE_API_URL}/api/product/get`;
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvdXJndWlkZSIsImlkIjoiNjIwZmExMGJmODM1NzllMzdlYzFhOTM3IiwiaWF0IjoxNjQ1MjU0MDgxLCJleHAiOjE2NDUyNjg0ODF9.uhavmhI_PAlNixmIWe1VIh7TxHJT5iVE-oRL3wmFMWk';
      const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const jsonRes = await response.json();
      console.log(jsonRes);
      return response;
    };
    fetchTrips();
  }, []);
  return (
    <Layout>
      <Container>
        <TripCatalog tripsArray={tripsArray} />
      </Container>
    </Layout>
  );
}

export default Trips;
