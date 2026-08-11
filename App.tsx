import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LocationMap } from './src/hook/LocationMap';
import Button from './src/components/Button';
import { Card } from './src/components/Card';

import {styles} from './styles'

export default function Home() {
  const { handleGetLocation, MapViewComponent, loading, location, address } = LocationMap();

  function handleSaveLocation() {
    console.log("Localização salva:", { location, address });
   
  }

  return (
    <View style={homeStyles.container}>
      {/* Botão Superior */}
      <View style={styles.buttonContainer}>
        <Button 
          title={loading ? "Buscando..." : "Obter Localização"} 
          onPress={handleGetLocation} 
          disabled={loading}
        />
      </View>

      {/* Card contendo APENAS o Mapa e as Informações de Endereço */}
      <Card style={styles.cardMargin}>
        {/* Renderiza o mapa mantendo uma altura fixa */}
        <View style={styles.mapWrapper}>
          <MapViewComponent />
        </View>

        {/* Exibe o endereço e coordenadas logo abaixo do mapa */}
        {location && (
          <View style={styles.infoContainer}>
            {address && (
              <>
                <Text style={styles.labelTitle}>Endereço:</Text>
                <Text style={styles.text}>
                  {address.formattedAddress ?? `${address.street}, ${address.streetNumber} - ${address.city}`}
                </Text>
              </>
            )}

            <View style={styles.coordsRow}>
              <Text style={styles.coordsText}>
                <Text style={styles.bold}>Lat:</Text> {location.coords.latitude}
              </Text>
              <Text style={styles.coordsText}>
                <Text style={styles.bold}>Long:</Text> {location.coords.longitude}
              </Text>
            </View>
          </View>
        )}
      </Card>

      {location && (
        <View style={styles.saveButtonContainer}>
          <Button 
            style={{ backgroundColor: '#41aaff', marginTop: 10, paddingVertical: 12, borderRadius: 8, paddingHorizontal: 20, alignItems: 'center' }}
            title={loading ? "Salvando..." : "Salvar Localização"} 
            onPress={handleSaveLocation}
            disabled={loading}
          />
        </View>
      )}
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  
});