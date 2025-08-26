import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default icon issue
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

const MapView = () => {
  // Updated coordinates for Thrive Therapy and Rehab
  const location = [13.0930032, 80.2168626]; // Exact coordinates
  const address = "Thrive Therapy and Rehab, 7A, P Block, 18th Street, 6th Avenue, Anna Nagar, Chennai-600040";
  
  // Create a div container to position the link over the map
  const mapContainerStyle = {
    position: 'relative',
    height: '100%',
    width: '100%'
  };
  
  const linkStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000, // Ensure link is above the map
    background: 'transparent',
    cursor: 'pointer',
  };

  return (
    <div style={mapContainerStyle}>
      {/* The actual clickable link overlay */}
      <a
        href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        title="Click to open in Google Maps"
        aria-label="Open in Google Maps"
      ></a>
      
      {/* The map */}
      <MapContainer
        center={location}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            Thrive Therapy and Rehab<br />
            7A, Ground Floor, P Block,<br />
            18th Street, 6th Avenue,<br />
            Anna Nagar, Chennai-600040
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;