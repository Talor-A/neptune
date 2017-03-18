/**
 * Created by ta on 3/6/17.
 */
import React from 'react'
import {TouchableOpacity, StyleSheet, Picker, View, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Row from '../layout/row'
import Text from '../text/text'
import colors from '../../colors'

export default function Select (props) {
  let {
    text,
    icon,
    options,
    onValueChange,
    enabled
  } = props
  let pickerItems = []
  options.map(i => {
    pickerItems.push(
      <Picker.Item
        label={i.label}
        value={i.value}
        key={i.value}
      />
    )
  })
  return (
    <View style={{borderWidth: 0}}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.row}
        onPress={
          () => {}
      }>
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
        onValueChange={onValueChange}
        mode={'dropdown'}
        style={{
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 2,
          color: 'red'
        }}>
        {pickerItems}
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
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    paddingVertical: 16,
    paddingHorizontal: 4
  }
})
