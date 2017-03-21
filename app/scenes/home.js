/**
 * Created by ta on 2/2/17.
 */
'use strict'

import React, { Component } from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import Text from '../basics/text/text'
import Button from '../basics/input/button'
import gradients from '../gradients'
import LinearGradient from 'react-native-linear-gradient'
import Markdown from '../basics/text/markdown'

const text = `
## Installation

Just the \`markdown\` library:

    npm install markdown

Optionally, install \`md2html\` into your path

    npm install -g markdown

### In the browser

If you want to use from the browser go to the [releases] page on GitHub and
download the version you want (minified or not).

`
export default class Home extends Component {
  renderGradients () {
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
  render () {
    return (
      <ScrollView>
        <Markdown text={text} />
      </ScrollView>
    )
  }
}
