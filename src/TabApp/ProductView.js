/**
 * Created by mumuhou on 16/6/20.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ProductView extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <Text style={{alignItems: 'center', marginTop: 100, color: '#55ACEE'}}>ProductView</Text>
      </View>
    );
  }
}