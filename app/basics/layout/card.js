/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import {View, StyleSheet} from 'react-native'
export default function Card (props) {
  return (
    <View
      {...props}
      style={[
        styles.card,
        props.style
      ]}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    margin: 4,
    marginBottom: 0,
    padding: 16,
    flex: 1,
    alignItems: 'flex-start'
  }
})
