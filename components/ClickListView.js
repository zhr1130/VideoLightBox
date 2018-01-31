/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
var appData = require('../config/appData');
var ListItem = require('./ListItem');

class ClickListView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(appData),
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(asin){
    this.props.onClick(asin);
  }
  render() {
    return (
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ListItem item={rowData}
            onClick = {(asin) => {this.onClick(asin)}} />} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ClickListView;
