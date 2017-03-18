/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import {TextInput} from 'react-native'
import colors from '../colors'
export default function Input (props) {
  return (
    <TextInput
      {...props}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholderTextColor={colors.grey5}
      style={[
        props.style,
        {color: 'white', fontSize: 16}
      ]}
    />
  )
}
