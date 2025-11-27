import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { CustomCardType } from "@/pages/Card";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Crear icono personalizado con color Mirai
const miraiIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      background-color: #d1383a;
      width: 28px;
      height: 28px;
      border-radius: 50% 50% 50% 0;
      border: 3px solid #ffffff;
      transform: rotate(-45deg);
      box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
    ">
      <div style="
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "></div>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

interface PartnersMapProps {
  partners: CustomCardType[];
}

// Componente para ajustar el mapa cuando cambien los marcadores
function MapBoundsController({ partners }: { partners: CustomCardType[] }) {
  const map = useMap();

  useEffect(() => {
    const partnersWithCoords = partners.filter(p => p.lat && p.lng);
    
    if (partnersWithCoords.length > 0) {
      const bounds = L.latLngBounds(
        partnersWithCoords.map(p => [p.lat!, p.lng!])
      );
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    } else {
      // Centro de Santiago si no hay partners con coordenadas
      map.setView([-33.4489, -70.6693], 12);
    }
  }, [partners, map]);

  return null;
}

export const PartnersMap = ({ partners }: PartnersMapProps) => {
  const mapRef = useRef(null);
  
  // Filtrar solo partners con coordenadas
  const partnersWithLocation = useMemo(() => {
    return partners.filter(p => p.lat && p.lng);
  }, [partners]);

  // Centro inicial de Santiago
  const center: [number, number] = [-33.4489, -70.6693];

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-mirai/20 shadow-sm">
      <style>{`
        .leaflet-container {
          background: #fef8f4 !important;
          font-family: inherit;
        }
        
        .leaflet-tile-pane {
          filter: grayscale(100%) brightness(1) contrast(1);
          opacity: 1;
        }
        
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.15);
          border: 1px solid rgb(228, 228, 228);
        }
        
        .leaflet-popup-tip {
          background: white;
          border: 2px solid #d1383a;
          border-top: none;
          border-right: none;
        }
        
        .leaflet-popup-close-button {
          color: #d1383a !important;
          font-size: 18px !important;
          font-weight: bold !important;
        }
        
        .leaflet-popup-close-button:hover {
          color: #ff8557 !important;
        }
        
        .leaflet-control-zoom a {
          background: white !important;
          border: 2px solid #d1383a !important;
          color: #d1383a !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: #fff5f0 !important;
        }
        
        .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.8) !important;
          font-size: 10px !important;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <MapBoundsController partners={partnersWithLocation} />

        {partnersWithLocation.map((partner, index) => (
          <Marker
            key={`${partner.name}-${index}`}
            position={[partner.lat!, partner.lng!]}
            icon={miraiIcon}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="font-bold text-lg mb-2 text-mirai">{partner.name}</h3>
                {partner.district && (
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Comuna:</strong> {partner.district}
                  </p>
                )}
                {partner.address && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Dirección:</strong> {partner.address}
                  </p>
                )}
                {partner.labels && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {partner.labels.map((label) => (
                      <span
                        key={label}
                        className="text-xs bg-mirai/10 text-mirai px-2 py-1 rounded"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-2">
                  {partner.instagram && (
                    <a
                      href={`https://instagram.com/${partner.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-mirai hover:underline"
                    >
                      Instagram
                    </a>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-mirai hover:underline"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

