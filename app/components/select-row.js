/**
 * Created by ta on 3/6/17.
 */
import React from 'react'
import {TouchableOpacity, StyleSheet, Picker, View, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Row from '../basics/row'
import colors from '../colors'
import Text from '../atoms/text'

export default function Select (props) {
  let {
    text,
    icon,
    options,
    selected,
    enabled
  } = props
  return (
    <View style={{borderWidth: 0}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.row}
        onPress={() => {}}
      >
        <Row>
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
      <Picker
        mode={'dropdown'}
        style={{
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 2,
          color: 'red'
        }}>
        <Picker.Item label='None' value={null} />
        {props.options.map(i => {
          return <Picker.Item
            label={i.label || 'INVALID'}
            value={i.value || 'INVALID'}
            key={Math.random()}
          />
        })}
      </Picker>
    </View>
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
