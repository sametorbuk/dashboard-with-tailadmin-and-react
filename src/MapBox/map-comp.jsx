import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';



const MapComponent = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1Ijoic2FtZXRvcmJ1ayIsImEiOiJjbHl6dG9jamkybWJ0MnFzaHVkd3ZkNmRvIn0.sjH6jX1Q98fH99demvGcKQ"
        >
            <Marker
                latitude={40.7128}
                longitude={-74.006}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <div>You are here</div>
            </Marker>
        </ReactMapGL>
    );
}

export default MapComponent;
