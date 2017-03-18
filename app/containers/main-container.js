'use strict'

import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../colors'
export default function MainContainer (props) {
  return (
    <View style={[styles.container, props.style]}>{props.children}</View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey0
        // paddingTop:4,
  }
})
