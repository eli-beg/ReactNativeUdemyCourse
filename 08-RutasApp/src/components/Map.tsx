import React, {useRef, useEffect, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../pages/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routesLines,
  } = useLocation();
  const [showPolyline, setShowPolyline] = useState(true);
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  };

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return;
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {
        latitude,
        longitude,
      },
    });
  }, [userLocation]);

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition!.latitude,
          longitude: initialPosition!.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //cuando el usuario quiere moverse en el mapa y no queremos que la camara siga la ruta
        onTouchStart={() => (following.current = false)}>
        {/* añado marcador */}
        {/* <Marker
        image={require('../assets/custom-marker.png')}
        coordinate={{latitude: 37.78825, longitude: -122.4324}}
        title="Esto es un titulo"
        description="Esto es una descripcion del marcador"
      /> */}

        {showPolyline ? (
          <Polyline
            coordinates={routesLines}
            strokeColor="black"
            strokeWidth={3}
          />
        ) : null}
      </MapView>

      {/* Floating action button */}
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{position: 'absolute', bottom: 20, right: 20}}
      />

      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyline(!showPolyline)}
        style={{position: 'absolute', bottom: 80, right: 20}}
      />
    </>
  );
};
