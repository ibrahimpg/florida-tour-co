import React, { useLayoutEffect, useState, useContext } from 'react';
import { Layout, Container } from '../components/Containers';
import TripCatalog from '../components/TripCatalog';
import tripsArray from '../functions/dummyData';
import Overlay from '../components/Overlay';
import Popup from '../components/Popup';
import { UserContext } from '../context/UserContext';

function Trips() {
  const { token } = useContext(UserContext)!;

  const currentWidth = window.innerWidth;
  let unopenedPosition: string;

  if (currentWidth > 735) {
    unopenedPosition = '-50vw';
  } else {
    unopenedPosition = '-80vw';
  }

  const [popupXPos, setPopupXPos] = useState<string>('-80vw');
  const [overlayDisplay, setOverlayDisplay] = useState<string>('none');
  const [activeTrip, setActiveTrip] = useState<any>([]);
  const [trips, setTrips] = useState(tripsArray);

  useLayoutEffect(() => {
    setPopupXPos(unopenedPosition);
    const fetchTrips = async () => {
      const url: string = `${import.meta.env.VITE_API_URL}/api/product/get`;
      const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) {
        const jsonRes = await response.json();
        setTrips((currentTrips) => ([...currentTrips, ...jsonRes]));
      }
    };
    fetchTrips();
  }, []);

  const deleteTrip = async (id: string) => {
    setTrips((currentTrips) => currentTrips.filter((x) => x._id !== id));
    const url: string = `${import.meta.env.VITE_API_URL}/api/product/delete`;
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    const body = JSON.stringify({ productId: id });
    await fetch(url, { method: 'DELETE', headers, body });
  };

  const viewTrip = (id: string) => {
    const selectedTrip = trips.filter((x) => x._id === id);
    setActiveTrip(selectedTrip);
    setPopupXPos('0');
    setOverlayDisplay('block');
  };

  return (
    <>
      {activeTrip.length > 0 && (
        <Popup
          tripName={activeTrip[0].tripName}
          description={activeTrip[0].description}
          city={activeTrip[0].city}
          activity={activeTrip[0].activity}
          time={activeTrip[0].time}
          startDate={activeTrip[0].startDate}
          endDate={activeTrip[0].endDate}
          popupXPos={popupXPos}
        />
      )}
      <Overlay
        overlayDisplay={overlayDisplay}
        closeOverlay={() => { setPopupXPos(unopenedPosition); setOverlayDisplay('none'); }}
      />
      <Layout>
        <Container>
          <TripCatalog tripsArray={trips} deleteTrip={deleteTrip} viewTrip={viewTrip} />
        </Container>
      </Layout>
    </>
  );
}

export default Trips;
