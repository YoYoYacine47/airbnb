import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }) {
  const [selectedLocatoin, setSelectedLocation] = useState();

  const coordinates = searchResults.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));

  const center = getCenter(coordinates);

  console.log(center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yoyoyacine47/cks4ynlih3q5618qq092z1014"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((res) => (
        <div key={res.log}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p>
              <LocationMarkerIcon
                onClick={() => setSelectedLocation(res)}
                className="text-gray-100 h-7 animate-bounce cursor-pointer"
                aria-label="push-pin"
              />
            </p>
          </Marker>

          {selectedLocatoin && selectedLocatoin.long === res.long ? (
            <Popup
              onClose={(e) => setSelectedLocation({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
