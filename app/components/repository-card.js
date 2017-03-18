/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Text from '../basics/text/text'
import Card from '../basics/layout/card'
import Row from '../basics/layout/row'
import colors from '../colors'

function BasicCard (props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Repo', {
        repo: props.repo.name,
        user: props.repo.owner.login
      })}>
      <Card>
        <Text style={styles.header}>
          {props.repo.isPrivate &&
          <Icon
            name='lock-outline'
            size={16}
          />}
          {props.repo.name}
        </Text>
        <Text style={styles.text}>
          {props.repo.description}
        </Text>
        <Row>
          <Icon name='source-fork' color={colors.grey3} size={16} />
          <Text style={styles.subText}>
            {props.repo.forks.totalCount}
            {'    '}
          </Text>
          <Icon name='star-outline' color={colors.grey3} size={16} />
          <Text style={styles.subText}>
            {props.repo.stargazers.totalCount}
          </Text>
        </Row>
      </Card>
    </TouchableOpacity>

  )
}

export default withNavigation(BasicCard)

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold'
  },
  text: {
    color: colors.grey5
  },
  subText: {
    color: colors.grey3
  }
})
