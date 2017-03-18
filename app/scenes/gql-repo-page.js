import React, { Component } from 'react'
import {
  ScrollView
} from 'react-native'
import { graphql } from 'react-apollo'
import { GET_REPO } from '../api/queries'
import Text from '../basics/text/text'
import Title from '../basics/text/title'

// create a component
class Repo extends Component {
  render () {
    let repo = this.props.data.repository
    if (repo) {
      return (
        <ScrollView>
          <Title>{repo.name}</Title>
          <Text>{repo.description}</Text>
        </ScrollView>
      )
    } else {
      return <Text>{JSON.stringify(this.props.data)}</Text>
    }
  }
}

export default graphql(GET_REPO,
  {
    options: (props) => ({ variables: {
      user: props.navigation.state.params.user,
      repo: props.navigation.state.params.repo
    } })
  })(Repo)
