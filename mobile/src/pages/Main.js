import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Mapview, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInicialLocation(){
      const { granted } = await requestPermissionsAsync()
      
      if (granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })
      
        const { latitude, longitude } = coords
       
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    } 
    loadInicialLocation()
  },[])

  if(!currentRegion){
    return null
  }

  return (
    <Mapview initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{latitude: -20.1559062, longitude: -40.2692473}}>
        <Image style={styles.avatar} source={{uri: 'https://avatars0.githubusercontent.com/u/11761077?s=460&v=4'}} />
        <Callout onPress={() => {
          navigation.navigate('Profile', { github_username: 'gislainejessica'})
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}> Gislaine Jéssica </Text>
            <Text style={styles.devBio}> CTO da @ChaComigo </Text>
            <Text style={styles.devTechs}> UX/UI, React Native, NodeJs, React, Python </Text>
          </View>
        </Callout>
      </Marker>
    </Mapview>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },
  callout: {
    width:260
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,

  }
})
