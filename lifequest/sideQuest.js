import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Checkbox } from 'react-native-paper';
import React, { useState } from 'react';

export default function SideQuest() {



  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState('');

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
      <View style={styles.checkboxWrapper}>
        <Checkbox
          status={item.status === '1' ? 'checked' : 'unchecked'}
          onPress={() => toggleStatus(item.id)}
        />
      </View>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );



  return (
    <View style={styles.container}>


        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Enter a main quest</Text>
              <TextInput
                placeholder={'Enter a task...'}
                placeholderTextColor="#aaa"
                value={task}
                onChangeText={setTask}
              />

              <TouchableOpacity style={{marginTop: 5, marginBottom: 5}}
                onPress={() => {
                  if (task.trim()) {
                    setData([...data, { id: (data.length + 1).toString(), title: task, status: '0' }]);
                    setTask('');
                    setModalVisible(false);
                  }
                }}
              >
                <Text style={styles.closeText}>Add</Text>
              </TouchableOpacity>

              {/* Close Button */}
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.title}>
            <Text style={styles.titleText}>Main quest:</Text>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.plusText}>＋</Text>
            </TouchableOpacity>
        </View>

        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
          style={{ width: '100%' }}
          padding={0}
          
        />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '95%',
  },

  title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    height: 40,
    paddingLeft: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 30,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  itemText: {
    fontSize: 20,
  },
  plusButton: {
    backgroundColor: '#007bff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 24,
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20
  },
  closeText: {
    fontSize: 16,
    color: 'blue'
  },
  checkboxWrapper: {
    borderWidth: 2,
    borderColor: 'black', // or any color
    borderRadius: 4,
    padding: 2, // spacing between border and checkbox
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    marginRight: 5,
    transform: [{ scale: 0.7 }], // adjust this (e.g., 0.7, 0.6)
  }
});