import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import MainQuest from './mainQuest';

export default function App() {
  return (
    
    <ScrollView>
      <View style={styles.container}>
        <MainQuest />
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
