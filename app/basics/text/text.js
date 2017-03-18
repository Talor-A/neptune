/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import { Text as T } from 'react-native'

export default function Text (props) {
  const style = {
    color: props.color ? props.color : 'white',
    fontWeight: props.weight ? props.weight : null,
    fontSize: props.size ? props.size : 16
    // lineHeight: props.size ? props.size * 1 :16
  }
  return (
    <T style={[style, props.style]}>
      {props.children}
    </T>
  )
}
