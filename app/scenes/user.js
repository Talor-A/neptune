/**
 * Created by ta on 3/2/17.
 */
'use strict'

import React, { Component } from 'react'
import Profile from '../components/user/profile'
import MainContainer from '../containers/main-container'
import { ActivityIndicator } from 'react-native'
import { graphql } from 'react-apollo'
import { GET_USER } from '../api/queries'

class User extends Component {
  render () {
    return (
      <MainContainer>
        {this.props.data.loading === true
          ? <ActivityIndicator />
          : <Profile user={this.props.data.user} />
        }
      </MainContainer>
    )
  }
}

export default graphql(GET_USER,
  {
    options: (props) => ({ variables: { user: props.navigation.state.params.user } })
  })(User)
