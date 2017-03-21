import React from 'react'
import {
  View,
  Text as Blank
} from 'react-native'
import Text from './text'
import Title from './title'
import { markdown } from 'markdown'

function renderBlob (line) {
  if (typeof line === 'string') return <Text>ROOT {line}</Text>
  if (line.length === 1) return renderBlob(line[0])
  if (Array.isArray(line[0])) {
    console.warn('sdf')
    return renderBlob(line[0])
  }
  switch (line[0]) {
    case ('para'):
      line.shift()
      return line.map(section => {
        return renderBlob(section)
      })
    case ('bulletlist'):
      line.shift()
      return React.createElement(
        View,
        {style: {
          borderLeftWidth: 8,
          paddingLeft: 8,
          borderLeftColor: '#333'
        }},
        renderBlob(line)
      )
    case ('listitem'):
      line[0] = '*'
      return renderBlob(line)
    case ('em'):
      line.shift()
      return React.createElement(
        Text,
        {style: {fontStyle: 'italic', color: '#ff0'}},
        renderBlob(line)
      )
    case ('strong'):
      line.shift()
      return React.createElement(
        Text,
        {weight: 'bold'},
        renderBlob(line)
      )
    case ('header'):
      return React.createElement(Title, null, line[2])
    case ('link_ref'):
    case ('link'):
      return React.createElement(Text, {color: '#2ce'}, line[2])
    default:
      line.shift()
      return renderBlob(line)
  }
}

function Markdown (props) {
  let data = markdown.parse(props.text)
  data.shift()
  return (
    <View>
      {data.map((line, i) => {
        return renderBlob(line)
      })}
      <Text>{'\n\n\n'}---------------------------------------</Text>
      {data.map((line, i) => {
        return <Text>{JSON.stringify(line)}</Text>
      })}
      <Text>{'\n\n\n'}---------------------------------------</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}

export default Markdown
