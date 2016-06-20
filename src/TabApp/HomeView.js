/**
 * Created by mumuhou on 16/6/20.
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';
import FirstPage from '../FirstPage';

export default class HomeView extends Component {
  onTouchedLeftButton() {
    console.log('_touchedLeftButton');
    this.props.navigator.pop();
  }

  onTouchedRightButton() {
    console.log('_touchedRightButton');
  }

  _openNextPage() {
    this.props.navigator.push({
      title : 'SecondPage',
      rightTitle : 'page2',
      touchedLeftButton: this.onTouchedLeftButton.bind(this),
      touchedRightButton: this.onTouchedRightButton.bind(this),
      component: FirstPage,
    });
  }

  render() {
    console.log('FirstPage render');
    return (
      <View style = {{flex: 1, alignItems: 'center', backgroundColor: '#EEEEEE'}}>
        <Text style={{color: '#55ACEE'}}>Home page</Text>
        <TouchableOpacity onPress = {this._openNextPage.bind(this)}>
          <Text style={{color: '#55ACEE'}}>Open Next Page--First page</Text>
        </TouchableOpacity>
      </View>
    );
  };
}