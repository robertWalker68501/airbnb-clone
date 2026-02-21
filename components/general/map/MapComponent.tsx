'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

interface IMapComponent {
  center: [number, number];
  price?: number;
}

const MapComponent = ({ center, price }: IMapComponent) => {
  const customIcon = new Icon({
    iconUrl: '/assets/images/marker-icon.png',
    iconSize: [32, 42],
    iconAnchor: [32, 42],
    popupAnchor: [0, -42],
  });

  return (
    <div className='relative h-full w-full overflow-hidden border border-gray-200 shadow-md'>
      <MapContainer
        center={center}
        zoom={center ? 8 : 4}
        scrollWheelZoom={false}
        className='h-full w-full'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker
          position={center}
          icon={customIcon}
        >
          {price && (
            <Popup>
              <p className='font-semibold'>${price} / night</p>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
