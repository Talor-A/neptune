/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import Text from './text'
function Title (props) {
  return (
    <Text {...props}
      style={[
        {
          color: 'white',
          fontWeight: '900',
          fontSize: 24,
          lineHeight: 36
        },
        props.style
      ]}>
      {props.children}
    </Text>
  )
}

export default Title
