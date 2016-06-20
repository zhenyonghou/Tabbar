/**
 * Created by mumuhou on 16/6/18.
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class ThirdPage extends Component {
  onTouchedLeftButton() {
    console.log('_touchedLeftButton');
    this.props.navigator.pop();
  }

  onTouchedRightButton() {
    console.log('_touchedRightButton');
  }
  
  _openNextPage() {

  }
  render() {
    console.log('ThirdPage render');
    return (
      <View style = {{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <Text style={{color: '#55ACEE'}}>Third page</Text>
        <TouchableOpacity onPress = {this._openNextPage.bind(this)}>
          <Text style={{color: '#55ACEE'}}>Open Next Page--Third page</Text>
        </TouchableOpacity>
      </View>
    );
  };
}