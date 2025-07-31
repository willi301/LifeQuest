import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ShopItemCard({ petName, price, imageSource, onBuy, owned }) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{petName}</Text>
      <Text style={styles.price}>💰 {price} coins</Text>

      <TouchableOpacity
        style={[styles.button, owned && styles.ownedButton]}
        onPress={onBuy}
        disabled={owned}
      >
        <Text style={[styles.buttonText, owned && styles.ownedButtonText]}>
          {owned ? '✅ Owned' : 'Buy'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginVertical: 8,
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
