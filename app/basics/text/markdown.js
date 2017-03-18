import React from 'react'
import {
  View
} from 'react-native'
import Text from './text'
import Title from './title'

function Markdown (props) {
  let {data} = props
  let arr = data.split('\n')
  return (
    <Text>{JSON.stringify(arr)}</Text>
  )
}

export default Markdown
