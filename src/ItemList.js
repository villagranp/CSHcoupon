import React, {Component} from 'react';
import { StyleSheet,  ListView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import ItemBox from './ItemBox'

export default class ItemList extends Component {

constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }  
  }

  componentDidMount(){
    this.updateDataSource(this.props.teams)
  }

  componentWillReceiveProps(newProps){
    if(newProps.teams !== this.props.teams)
        this.updateDataSource(newProps.teams)
    } 

    updateDataSource = data => {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }

  render() {
   return (
      <ListView
        enableEmptySections = {true}
        dataSource={this.state.dataSource}
        renderRow={(team) =>  <ItemBox team = {team}/> }
      />

    );
  }
}

const styles = StyleSheet.create({
  
});
