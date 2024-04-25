/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '400px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px'
};

const mapContainerStyle = { width: '70%', height: '100%', border: '2px solid #ccc', borderRadius: '8px', backgroundColor: '#fff', overflow: 'hidden' };
const center = { lat: 16.7107, lng: 81.0952 };

function OrderStatus() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.Api_key
  });

  const userAddress = useSelector(state => state.addressReducer.address);

  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState({ lat: 16.7107, lng: 81.0952 }); // Replace with the current address coordinates
  const [destination, setDestination] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('Directions request failed due to ', response.status);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoaded && userAddress) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: userAddress }, (results, status) => {
        if (status === 'OK') {
          setDestination(results[0].geometry.location);
        } else {
          console.log('Geocode was not successful for the following reason:', status);
        }
      });
    }
  }, [isLoaded, userAddress]);

  return (
    <>
      {isLoaded && (
        <div style={containerStyle}>
          <div style={mapContainerStyle}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {destination && origin && (
                <DirectionsService
                  options={{
                    destination,
                    origin,
                    travelMode: 'DRIVING'
                  }}
                  callback={directionsCallback}
                />
              )}

              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    polylineOptions: {
                      icons: [
                        {
                          icon: {
                            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                            scale: 4,
                            fillColor: '#FF0000',
                            fillOpacity: 1,
                            strokeColor: '#FF0000',
                            strokeWeight: 2,
                            rotation: 0,
                          },
                          offset: '100%',
                          repeat: '100px',
                        },
                      ],
                    },
                  }}
                />
              )}
            </GoogleMap>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderStatus;
