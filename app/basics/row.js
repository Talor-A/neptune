/**
 * Created by ta on 3/4/17.
 */
import React from 'react'
import {View} from 'react-native'
export default function Row (props) {
  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
        props.style
      ]}>
      {props.children}
    </View>
  )
}
