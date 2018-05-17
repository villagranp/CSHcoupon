import React, {Component}   from 'react';
import { StyleSheet, View } from 'react-native';
import { Foundation }       from '@expo/vector-icons';
import ItemBox              from './src/ItemBox';
import ItemList             from './src/ItemList';
import { getTeams }         from './src/APIclient'

export default class App extends Component {
  state = {
    teams: []
  }
  componentDidMount() {
    getTeams()
    .then(data => this.setState({teams: data}))
  }

  render() {
   const teams = this.state.teams
   return (

    <View style={styles.container}>
        <ItemList teams={teams}/>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
