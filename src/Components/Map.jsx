import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "700px",
};

const center = {
  lat: 52.52902,
  lng: 13.43044,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const markers = [
    { id: 1, lat: 52.52902, lng: 13.43044 },
    { id: 2, lat: 52.53043, lng: 13.41372 },
  ];

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markers.map((marker) => (
            <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Map;
