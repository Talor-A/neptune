/**
 * Created by ta on 3/2/17.
 */
'use strict'

import React, { Component } from 'react'
import Profile from '../components/user/profile'
import MainContainer from '../containers/main-container'

import { graphql } from 'react-apollo'
import { GET_VIEWER } from '../api/queries'

class MyProfile extends Component {
  componentDidMount () {

  }
  render () {
    return (
      <MainContainer>
        <Profile
          user={this.props.data.viewer}
        />
      </MainContainer>
    )
  }
}

export default graphql(GET_VIEWER)(MyProfile)
