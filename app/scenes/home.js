/**
 * Created by ta on 2/2/17.
 */
'use strict'

import React, { Component } from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import Text from '../atoms/text'
import Card from '../atoms/card'
import Button from '../atoms/button'
import gradients from '../gradients'
import LinearGradient from 'react-native-linear-gradient'

export default class Home extends Component {
  renderHome (props) {
    return (
      <View style={{marginTop: 200}}{...props}>
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />
        <Button
          pad
          color='#334D5C'
          title='View a User Profile'
          onPress={() => { this.props.navigation.navigate('Profile', {username: 'talor-a'}) }}
        />
        <Button
          pad
          color='#45B29D'
          title='View a Repo'
          onPress={() => {}}
        />
        <Button
          pad
          color='#EFC94C'
          title='Login'
          onPress={() => { this.props.navigation.navigate('LoginWebView') }}
        />
        <Button
          pad
          color='#E27A3F'
          title='Create a Repo'
          onPress={() => {}}
        />
        <Button
          pad
          color='#DF5A49'
          title='View a Repo'
          onPress={() => {}}
        />
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        {gradients.map(gradient => {
          return (
            <LinearGradient
              key={gradient.name}
              colors={gradient.colors}
              style={{padding: 4, margin: 8}}>
              <View style={{
                backgroundColor: '#212121',
                padding: 32
              }}>
                <Text>{gradient.name}</Text>
              </View>
            </LinearGradient>
          )
        })}
      </ScrollView>
    )
  }
}
