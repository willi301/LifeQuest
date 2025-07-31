// Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Header from './header';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {

    const navigation = useNavigation();

    const handleBattle = () => {
    Alert.alert('⚔️ Battle!', 'You encountered a wild pet! (Feature coming soon)');
  };

  const handleShop = () => {
    navigation.navigate('Shop');
  };



  return (
    <View style={styles.container}>
      <Header title="Profile" style={{flex: 1 , width: '95%'}}/>

      <View style={styles.imagebox}>
        <Image
            source={require('./assets/pngwing.com.png')}
            style={styles.characterImage}
            resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBattle}>
            <Text style={styles.buttonText}>⚔️ Battle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleShop}>
            <Text style={styles.buttonText}>🛍️ Shop</Text>
          </TouchableOpacity>
    </View>

    <View style={styles.reset}>
      <TouchableOpacity
        onPress={async () => {
          try {
            await AsyncStorage.clear();
            alert('reset!');
          } catch (e) {
            console.error('Error resetting pets', e);
          }
        }}
        style={{ backgroundColor: 'red', padding: 10, borderRadius: 8 }}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>Reset Characters</Text>
      </TouchableOpacity>
    </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // center horizontally
    // justifyContent: 'center', // center vertically
    backgroundColor: '#fff',
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    // marginTop: 20,
  },
  top: {
    paddingTop: 30,
  },
  characterImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  imagebox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    marginBottom: 20,
    height: '60%',
  },
    buttonContainer: {
    flexDirection: 'row',
    gap: 20, // You can use marginHorizontal on buttons instead if 'gap' doesn't work
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reset: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  }
});