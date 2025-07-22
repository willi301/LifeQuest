import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MainQuest from './mainQuest';
import SideQuest from './sideQuest';

export default function App() {
  return (
    
    <ScrollView>
      <View style={{ flex: 1 }}>
        <MainQuest />
      </View>
      <View style={{ flex: 1 }}>
        <SideQuest />
      </View>

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
