/**
 * Created by ta on 3/6/17.
 */
import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Row from '../basics/row'
import Text from '../atoms/text'
import colors from '../colors'
Toggle.propTypes = {
  text: React.PropTypes.string.isRequired,
  enabled: React.PropTypes.bool.isRequired,
  onPress: React.PropTypes.func.isRequired,
  icon: React.PropTypes.array
}
export default function Toggle ({text, icon, enabled, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.row}
      onPress={onPress}
    >
      <Row >
        <Text style={styles.text}>
          {text}
        </Text>
        <Icon
          name={enabled ? icon ? icon[0] : 'checkbox-marked-circle-outline' : icon ? icon[1] : 'close-circle-outline'}
          color={enabled ? colors.green : colors.red}
          size={20}
        />
      </Row>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.grey3,
    fontSize: 14
  },
  row: {
    borderTopColor: colors.grey2,
    borderTopWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 4
  }
})
