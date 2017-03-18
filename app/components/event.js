/**
 * Created by ta on 3/2/17.
 */
import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Card from '../basics/layout/card'
import Text from '../basics/text/text'
import Mono from '../basics/text/mono'
import AvatarWithNav from '../basics/img/avatar-with-nav'
import colors from '../colors'
import moment from 'moment'
function Event (props) {
  let user = props.event.actor
  let repo = props.event.repo
  let data = props.event.payload
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <AvatarWithNav
          source={{uri: user.avatar_url}}
          size={48}
          link={user.login}
          to={'Profile'}
        />
        <View style={styles.right}>
          <Text>
            <Text style={styles.head}>
              {user.display_login}
            </Text>
            {props.event.type === 'PushEvent' && ' pushed to '}
            <Text style={styles.head}>
              {repo.name}
            </Text>
          </Text>
          <Text>
            {data.size === 1 ? '1 commit' : data.size + ' commits'}
            {' ' + moment(props.event.created_at).fromNow()}
          </Text>
          {data.commits.splice(0, 3).map(commit => {
            return <Mono
              key={commit.sha}
              style={styles.subtext}>
              - {commit.message}
            </Mono>
          })}
          <Mono>
            {Object.keys(props.event).map(key => {
              return key + ': ' + props.event[key] + '\n'
            })}
          </Mono>
        </View>
      </View>
    </Card>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'stretch'
  },
  row: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey2,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start'
  },
  right: {
    paddingLeft: 8,
    flex: 1
  },
  head: {
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  subtext: {
    color: colors.grey5,
    fontSize: 12,
    lineHeight: 18,
    overflow: 'hidden'
  }
})
Event.propTypes = {event: React.PropTypes.object.isRequired}
export default Event
