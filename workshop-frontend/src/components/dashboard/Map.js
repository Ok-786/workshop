import React, { useEffect, useRef, useState } from 'react';
// import '../css/Map.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const styles = {
    width: "100%",
    height: "600px",
    // position: "absolute"
};

export default function Map(props) {
    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const  center=[73.0481, 33.6845];
    const zoom = 12;

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib2stNzg2IiwiYSI6ImNrdHBsN2EzazAyNngzMWtndjE0ajF0YjMifQ.EH_h1lGgFsCHiaFK4uTSJQ';
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: center,
                zoom: zoom
            });
            
            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div  ref={el => (mapContainer.current = el)} style={styles} className='map' />;
};
