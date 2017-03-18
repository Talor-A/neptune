/**
 * Created by ta on 3/6/17.
 */
import React from 'react'
import Text from './text'
export default function Mono (props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {fontFamily: 'UbuntuMono-Regular'}
      ]}
      >{props.children}</Text>
  )
}
