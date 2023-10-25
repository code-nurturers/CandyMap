import "leaflet/dist/leaflet.css";
import './CandyMap.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const CandyMap = (props) => {
    
    return (
        <MapContainer center={props.mapCenter} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                props.candyLocations.map(l => (
                    <Marker position={[l.lat, l.long]} key={l.name}>
                        <Popup>
                            {l.name}
                        </Popup>
                    </Marker>
                ))
            }
            
      </MapContainer>
    )
}

export default CandyMap