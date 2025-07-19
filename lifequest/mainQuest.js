import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import * as React from 'react';

export default function MainQuest() {


  const [checked, setChecked] = React.useState(false);

  const DATA = [
    { id: '1', title: 'First work' },
    { id: '2', title: 'Second work' },
    { id: '3', title: 'Third work' },
  ];

  const Item = ({ title }) => (

    <View style={styles.item}>
      <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={styles.box}
            />
      <Text style={styles.titleText}>{title}</Text>

    </View>
    

  );



  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Main quest:</Text>
        </View>

        <FlatList 
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item title={item.title} />}
        />

            
        
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'pink',
    width: '80%',
  },

  title: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    height: 30,
    paddingLeft: 10,
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 20,
  },

  box: {
    backgroundColor: 'black',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  }
});