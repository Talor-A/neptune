/**
 * Created by ta on 3/4/17.
 */
import React from 'react'
import {withNavigation} from 'react-navigation'
import {TouchableOpacity} from 'react-native'
import Avatar from './avatar'

const TouchableAvatar = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate(props.to, {user: props.link})} >
    <Avatar {...props} />
  </TouchableOpacity>
)

const AvatarWithNav = withNavigation(TouchableAvatar)
export default AvatarWithNav
