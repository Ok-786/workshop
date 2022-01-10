import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

export default function Map() {
    const [viewport, setViewport] = React.useState({
        longitude:73.0481,
        latitude: 33.6245,
        zoom: 12
    });
    return (
        <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport} mapboxApiAccessToken='pk.eyJ1Ijoib2stNzg2IiwiYSI6ImNrdHBsN2EzazAyNngzMWtndjE0ajF0YjMifQ.EH_h1lGgFsCHiaFK4uTSJQ'>
            <Marker longitude={73.0961} latitude={33.5925} offsetLeft={-20} offsetTop={-10}>
                <RoomIcon style={{ color: "red" }}/>
            </Marker>

            <Marker longitude={73.0481} latitude={33.6445} offsetLeft={-20} offsetTop={-10}>
                <BuildCircleIcon style={{ color: "blue" }}/>
            </Marker>
            <Marker longitude={73.0000} latitude={33.6745} offsetLeft={-20} offsetTop={-10}>
                <BuildCircleIcon style={{ color: "blue" }}/>
            </Marker>
            <Marker longitude={73.0981} latitude={33.6445} offsetLeft={-20} offsetTop={-10}>
                <BuildCircleIcon style={{ color: "blue" }}/>
            </Marker>
            <Marker longitude={73.0781} latitude={33.5845} offsetLeft={-20} offsetTop={-10}>
                <DirectionsCarFilledIcon style={{ color: "green" }}/>
            </Marker>

        </ReactMapGL>
    );
}