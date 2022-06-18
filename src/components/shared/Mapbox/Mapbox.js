import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styles from './Mapbox.module.css'
import { useGeolocated } from "react-geolocated";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC;


const Mapbox = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-87.6493);
    const [lat, setLat] = useState(41.8359);
    const [zoom, setZoom] = useState(10);

    // Intializing mapbox
    useEffect(() => {
        if (coords) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/ayushagrahari/cl4c885cp000115rokn8ucklr',
                // center: [coords.longitude, coords.latitude],
                center: [lng, lat],
                zoom: zoom
            });
        }
    }, [coords]);

    // Updating long and lat 
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    return !isGeolocationAvailable ? (
        <h3>
            Your Browser does not support Geolocation
        </h3>
    )
        : !isGeolocationEnabled ? (
            <h3>Geolocation is not enabled</h3>
        )
            : (
                <>
                    <div className={styles.wrapper}>
                        <div className={styles.freelancer}>
                            <img src="../../location_dark.svg" alt="" />
                            <h3>Available Freelancer's</h3>
                        </div>
                        <div ref={mapContainer} className={styles.map_container} />
                    </div>
                </>
            )
}

export default Mapbox