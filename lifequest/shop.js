// Shop.js
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './header';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ShopItemCard from './shopCard';

export default function Shop() {

  const navigation = useNavigation();
  const [ownedPets, setOwnedPets] = useState([]);


  useEffect(() => {
    const loadOwnedPets = async () => {
      try {
        const stored = await AsyncStorage.getItem('@owned_pets');
        if (stored) {
          setOwnedPets(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Failed to load owned pets', e);
      }
    };
    loadOwnedPets();
  }, []);


  const handleBuy = async (petName) => {
    if (ownedPets.includes(petName)) return;

    const updated = [...ownedPets, petName];
    setOwnedPets(updated);

    try {
      await AsyncStorage.setItem('@owned_pets', JSON.stringify(updated));
      Alert.alert('🛒 Bought!', `You purchased ${petName}!`);
    } catch (e) {
      console.error('Failed to save owned pet', e);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header title="Pet Shop" />
      </View>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
        <Text style={styles.returnButtonText}>⬅️ Return</Text>
      </TouchableOpacity>
      <Text style={styles.text}>🐾 Welcome to the Pet Shop!</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
        <ShopItemCard
          petName="Fluffie"
          price={10}
          imageSource={require('./assets/cat1.png')}
          onBuy={() => handleBuy('Fluffie')}
          owned={ownedPets.includes('Fluffie')}
        />

        <ShopItemCard
          petName="Snappy"
          price={15}
          imageSource={require('./assets/cat1.png')}
          onBuy={() => handleBuy('Snappy')}
          owned={ownedPets.includes('Snappy')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
  scroll: {
    alignItems: 'center',
    padding: 16,
  },
  returnButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
},

returnButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},
top: {
    paddingTop: 30,
},
});