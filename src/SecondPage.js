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
import ThirdPage from './ThirdPage';


export default class SecondPage extends Component {
  onTouchedLeftButton() {
    console.log('_touchedLeftButton');
    this.props.navigator.pop();
  }

  onTouchedRightButton() {
    console.log('_touchedRightButton');
  }
  
  _openNextPage() {
    this.props.navigator.push({
      title: 'ThirdPage',
      rightTitle: 'page3',
      touchedLeftButton: this.onTouchedLeftButton.bind(this),
      touchedRightButton: this.onTouchedRightButton.bind(this),
      component: ThirdPage,
    });
  }
  render() {
    console.log('SecondPage render');
    return (
      <View style = {{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <Text style={{color: '#55ACEE'}}>Second page</Text>
        <TouchableOpacity onPress = {this._openNextPage.bind(this)}>
          <Text style={{color: '#55ACEE'}}>Open Next Page--Second page</Text>
        </TouchableOpacity>
      </View>
    );
  };
}