import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import React, { useState } from 'react';

export default function MainQuest() {


  const [checked, setChecked] = React.useState(false);

  const [data, setData] = useState([
    { id: '1', title: 'First work', status: '0' },
    { id: '2', title: 'Second work', status: '0' },
    { id: '3', title: 'Third work', status: '0' },
  ]);

  const toggleStatus = (id) => {
    const newData = data.map(item =>
      item.id === id
        ? { ...item, status: item.status === '0' ? '1' : '0' }
        : item
    );
    setData(newData);
  };

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Checkbox
        status={item.status === '1' ? 'checked' : 'unchecked'}
        onPress={() => toggleStatus(item.id)}
        style={styles.box}
      />
      <Text style={styles.titleText}>{item.title}</Text>
    </View>
  );



  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>Main quest:</Text>
        </View>

        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
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