'use strict'

import React from 'react'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Text from '../text/text'
import colors from '../../colors'

Button.propTypes = {
  color: React.PropTypes.any,
  pad: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool
  ])
}
export default function Button (props) {
  let pad
  if (props.pad && typeof props.pad === 'boolean') pad = 4
  else if (props.pad && typeof props.pad === 'number') pad = props.pad
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {backgroundColor: props.color || colors.green},
        {margin: pad || 0},
        props.style
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 12
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16
  }
})
