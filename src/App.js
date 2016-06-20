/**
 * Created by mumuhou on 16/6/18.
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';
import TabNavi from './TabApp/TabNavi';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = {
      title : 'FristPage',
      rightTitle : 'page1',
      component : TabNavi
    };
  }

  _configScene(route) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  _renderScene(route, navigator) {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  _renderNavBar() {
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {

        /* 获取routeStack里的上一级title */
        var previousRoute = {};
        if (navState.routeStack.length > 1) {
          previousRoute = navState.routeStack[navState.routeStack.length - 2];
        }
        return (
          <TouchableOpacity
            onPress = {route.touchedLeftButton}
            style = {styles.button}>
            <Text style = {styles.buttonText}>{previousRoute.title}</Text>
          </TouchableOpacity>
        );
      },
      RightButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity
            onPress = {route.touchedRightButton}
            style = {styles.button}>
            <Text style = {styles.buttonText}>{route.rightTitle}</Text>
          </TouchableOpacity>
        )
      },
      Title(route, navigator, index, navState) {
        console.log('title ' + index + ', title=' + route.title + ', rightTitle=' + route.rightTitle);
        return (
          <View style = { styles.title }>
            <Text style = { styles.buttonText } > {route.title ? route.title : 'Splash'}</Text>
          </View>
        );
      }
    };
    
    return (
      <Navigator.NavigationBar
        style = {{
          alignItems: 'center',
          backgroundColor: '#55ACEE',
          shadowOffset: {
            width: 1,
            height: 0.5,
          },
          shadowColor: '#55ACEE',
          shadowOpacity: 0.8,
        }}
        routeMapper = {routeMapper}
      />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute = {this.initialRoute}
        configureScene = {this._configScene}
        renderScene = {this._renderScene}
        sceneStyle = {{paddingTop: 74}}
        navigationBar = {this._renderNavBar()}
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  button: {
    flex: 1, width: 80, alignItems: 'center', justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16, color: '#FFFFFF', fontWeight: '400'
  }
});