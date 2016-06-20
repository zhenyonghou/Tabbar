/**
 * Created by mumuhou on 16/6/20.
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import HomeView from './HomeView';
import ProductView from './ProductView';
import ProfileView from './ProfileView';

export default class TabNavi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          /*renderIcon={() => <Image source={...} />}
          renderSelectedIcon={() => <Image source={...} />}*/
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomeView navigator={this.props.navigator}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'product'}
          title="Product"
          /*renderIcon={() => <Image source={...} />}
          renderSelectedIcon={() => <Image source={...} />}
          renderBadge={() => <CustomBadgeView />}*/
          onPress={() => this.setState({ selectedTab: 'product' })}>
          <ProductView />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          /*renderIcon={() => <Image source={...} />}
          renderSelectedIcon={() => <Image source={...} />}
          renderBadge={() => <CustomBadgeView />}*/
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <ProfileView />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}