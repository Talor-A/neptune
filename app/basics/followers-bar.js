/**
 * Created by ta on 3/5/17.
 */
import React from 'react'
import Row from './row'
import Text from '../atoms/text'
import { StyleSheet } from 'react-native'
import colors from '../colors'

export default function FollowersBar (props) {
  return (
    <Row>
      <Text style={styles.text}>
        {props.followers || '?'} followers
      </Text>
      <Text style={styles.text}>
        {props.following || '?'} following
      </Text>
      <Text style={styles.text}>
        {props.stars || '?'} stars
      </Text>
    </Row>
  )
}
const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: colors.grey5
  }
})
