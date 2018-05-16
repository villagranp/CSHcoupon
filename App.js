import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default class App extends Component {
  render() {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Chivas-GP.png'
    const name  = 'Chivas de Guadalajara'
    const likes = 100
    return (
      <View style={styles.container}>
        <View style={styles.box}>
            <Image style={styles.image} source={{uri: image }} />
            <View style={styles.textInBox}>
              <View style={styles.textApart}>
                <Text style={styles.textBox}> {name} </Text>
              </View>
              <View style={styles.iconApart}>
                <Foundation name='like' size={35} color='blue' />
                <Text > {likes} </Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    paddingTop: 50,
  },
  box:{
    flexDirection: 'row',
    height: 100,
  },
  image:{
    height: 250,
    width: 250,
  },
  textInBox:{
    flex: 1,
    justifyContent: 'center',
  },
  textBox:{
    fontSize: 25,
    marginTop: 10,
    color: 'steelblue',
  },
  textApart:{
    backgroundColor: 'red',
  },
  iconApart:{
    flex: 1,
    backgroundColor: 'green',
  },
});
