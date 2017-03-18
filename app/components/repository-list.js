/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import {
  ScrollView
} from 'react-native'
export default function RepositoryList (props) {
  return (
    <ScrollView {...props} indicatorStyle='white'>
      {props.children}
    </ScrollView>
  )
}
