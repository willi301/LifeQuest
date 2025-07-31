// Header.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ title = "My Quest App" }) {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const value = await AsyncStorage.getItem('@coin_count');
        if (value !== null) {
          setCoins(parseInt(value));
        }
      } catch (e) {
        console.error('Failed to load coin count', e);
      }
    };

    // Load coins once on mount
    loadCoins();

    // Optional: auto-refresh every few seconds
    const interval = setInterval(loadCoins, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.coinBox}>
        <Text style={styles.coinText}>💰 {coins}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    // backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  coinBox: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    minWidth: 60,
    alignItems: 'center',
  },
  coinText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
