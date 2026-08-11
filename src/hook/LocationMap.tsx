import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  reverseGeocodeAsync,
  LocationGeocodedAddress
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../styles";

export function LocationMap() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [address, setAddress] = useState<LocationGeocodedAddress | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGetLocation() {
    setLoading(true);
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      
      if (!granted) {
        console.log("Permissão de localização negada.");
        return;
      }

      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      const enderecoResponse = await reverseGeocodeAsync({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });

      if (enderecoResponse && enderecoResponse.length > 0) {
        setAddress(enderecoResponse[0]);
      }

      //console.log("LOCALIZAÇÃO ATUAL =>", currentPosition);
      //console.log("Endereço correspondente: ", enderecoResponse);
    } catch (error) {
      console.error("Erro ao obter localização: ", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    location,
    address, 
    loading,
    handleGetLocation,
    MapViewComponent: () => (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        
        {location && !loading && (
          <MapView
            key={`${location.coords.latitude}-${location.coords.longitude}`}
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }}
            />
          </MapView>
        )}
      </View>
    )
  };
}