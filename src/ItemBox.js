import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'react-native-remote-svg';
import { Foundation } from '@expo/vector-icons';

export default class ItemBox extends Component {
  render() {
    const {image, name, likes, comments} = this.props.team
    return (
        <View style={styles.box}>
            <Image style={styles.image} source={{uri: image }} />
            <View style={styles.textInBox}>
              <View style={styles.textApart}>
                <Text style={styles.textBox}> {name} </Text>
              </View>
              <View style={styles.iconBox}>
                <View style={styles.iconApart}>
                  <Foundation name='like' size={35} color='gray' />
                  <Text style={styles.likeText}> {likes} </Text>
                </View>
                <View style={styles.iconApart}>
                  <Foundation name='comments' size={35} color='gray' />
                  <Text style={styles.likeText}> {comments} </Text>
                </View>
              </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    flexDirection: 'row',
    height: 150,
    backgroundColor: 'lightgray',
    margin: 5,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: -2,
    }
  },
  image:{
    height: 150,
    width: 150,
  },
  textInBox:{
    flex: 1,
    justifyContent: 'center',
  },
  textBox:{
    fontSize: 25,
    marginTop: 10,
    color: '#333',
  },
  textApart:{
    
  },
  iconApart:{
    
  },
  likeText:{
    color: 'gray'
  },
  iconBox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    marginTop: 20,
  }
});
