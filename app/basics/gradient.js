import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

// create a component
function Gradient (props) {
  return (
    <LinearGradient >
      {props.children}
    </LinearGradient>
  )
}

export default Gradient
