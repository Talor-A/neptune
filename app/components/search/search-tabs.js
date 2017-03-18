/**
 * Created by ta on 3/4/17.
 */
'use strict';

import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import SearchUsers from './search-users'
import colors from '../colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: colors.red,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
    color:'white',
  },

});

export default class SearchTabs extends Component {

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Users' },
      { key: '2', title: 'Code' },
      { key: '3', title: 'Repos' },
    ],
  };
  handleChangeTab = (index)=> {
    this.setState({
      index,
    });
  };

  renderLabel = (props: any) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? colors.red : 'white');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[ styles.label, { color } ]}>
        {route.title}
      </Animated.Text>
    );
  };

  renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        pressColor={colors.red+'40'}
        renderLabel={this.renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={{backgroundColor:colors.grey0}}
      />
    );
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <SearchUsers query={this.props.query}/>;
      case '2':
        return <SearchUsers query={this.props.query}/>;
      case '3':
        return <SearchUsers query={this.props.query}/>;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}