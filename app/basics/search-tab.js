/**
 * Created by ta on 3/3/17.
 */
import React from 'react'
import Text from '../atoms/text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import colors from '../colors'
export default function SearchTab (props) {
  return (
    <TouchableOpacity
      key={props.name}
      onPress={props.onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: props.active ? props.color : null
      }}>
      <Text style={{color: props.color, fontSize: 14}}>
        <Icon name={props.icon} color={props.color} size={16} />
        {props.name}
      </Text>
    </TouchableOpacity>
  )
}
