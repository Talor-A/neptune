'use strict'

import React from 'react'
import { Image } from 'react-native'

function Avatar (props) {
  return (
    <Image
      {...props}
      source={props.source}
      style={[
        {
          width: props.size || 96,
          height: props.size || 96,
          borderRadius: props.size / 2
        },
        props.style
      ]}
        />
  )
}

Avatar.propTypes = {
  size: React.PropTypes.number
}

export default Avatar
