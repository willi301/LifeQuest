import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MainQuest from './mainQuest';
import SideQuest from './sideQuest';

export default function App() {
  return (
    
      <View style={styles.container}>
        <View style={{ flex: 1 , width: '95%'}}>
          <MainQuest />
        </View>
        <View style={{ flex: 1 , width: '95%'}}>
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
  },
});
