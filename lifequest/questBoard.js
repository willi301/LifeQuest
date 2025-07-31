import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './header';
import MainQuest from './mainQuest';
import SideQuest from './sideQuest';

export default function QuestBoard() {
  return (
    <View style={styles.container}>
            <View style={styles.top}>
                <Header title="LifeQuest"  style={styles.top}/>
            </View>
            <View style={styles.quest}>
              <MainQuest />
            </View>
            <View style={styles.quest}>
              <SideQuest />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // paddingTop: 30,
  },
  top: {
    paddingTop: 30,
    flex: 1,
    marginBottom: 0,
  },
  quest: {
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    flex: 100, 
    width: '100%'
  }
});