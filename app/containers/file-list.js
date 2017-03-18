/**
 * Created by ta on 3/6/17.
 */
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {View} from 'react-native'
import Row from '../basics/row'
import Mono from '../atoms/mono'
import colors from '../colors'
export default function FileList (props) {
  function getName (file) {
    if (file.type === 'dir') return 'folder-outline'
    else {
      if (file.name.endsWith('.md')) return 'file-document'
      else if (file.name.endsWith('.js')) return 'language-javascript'
      else if (file.name.endsWith('.html')) return 'web'
      else if (file.name.endsWith('.css')) return 'language-css3'
      else if (file.name.endsWith('.py')) return 'language-python'
      else return 'file'
    }
  }
  function sortFunc (a, b) {
    let nameA = a.type // ignore upper and lowercase
    let nameB = b.type // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  }
  return (
    <View style={{ paddingHorizontal: 16 }}>
      {props.content && props.content.sort(sortFunc).map(file => {
        return (
          <Row key={file.sha}
            style={{
              paddingVertical: 12,
              borderBottomColor: colors.grey2,
              borderBottomWidth: 1
            }}
          >
            <Mono style={{color: colors.grey5}}>
              {file.type === 'dir' ? file.name + '/' : file.name}
            </Mono>
            <Icon name={getName(file)} color={colors.grey5} size={24} />
          </Row>
        )
      })}
    </View>
  )
}
