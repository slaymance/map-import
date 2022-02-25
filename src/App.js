import * as React from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';

export default function App() {
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />
  );
}