/**
* Created by ta on 3/5/17.
*/
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated
} from 'react-native'
import Title from '../atoms/title'
import RepositoryList from '../components/repository-list'
import RepositoryCard from '../components/repository-card'
import FollowersBar from '../basics/followers-bar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../colors'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 60
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  renderHeader () {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.3, 0],
      extrapolate: 'clamp'
    })
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })
    return (
      <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.Image style={[ styles.backgroundImage, {opacity: imageOpacity, transform: [{translateY: imageTranslate}]} ]} source={{uri: this.props.user.avatar_url}} />
        <View style={styles.bar}>
          <Icon name='account-plus' size={24} color='transparent' />
          <Title>
            {this.props.user.name}
          </Title>
          <Icon name={this.props.icon || 'account-settings-variant'} size={24} color='white' />
        </View>
      </Animated.View>
    )
  }

  renderRepos () {
    return this.props.repos && this.props.repos.map(repo => {
      return <RepositoryCard repo={repo} key={repo.id} />
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <RepositoryList style={{flex: 1}} scrollEventThrottle={16} onScroll={Animated.event([{
          nativeEvent: {contentOffset: {y: this.state.scrollY}}
        }])}>
          <View style={styles.scrollViewContent}>
            <FollowersBar followers={this.props.user.followers} following={this.props.user.following} stars={this.props.user.stars} />
            {this.renderRepos()}
          </View>
        </RepositoryList>
        {this.renderHeader()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.grey0,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },
  bar: {
    margin: 14,
    height: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT - 64,
    borderRadius: HEADER_MAX_HEIGHT - 64 / 2,
    resizeMode: 'contain'
  }
})
