/**
* Created by ta on 3/2/17.
*/
'use strict'

import React, { Component } from 'react'
import {
  ScrollView,
  RefreshControl
} from 'react-native'
import Event from '../components/event'
import MainContainer from '../containers/main-container'
import github from '../github'
import API from '../api/api'
import colors from '../colors'

export default class Notifications extends Component {
  constructor (props) {
    super(props)
    this.state = {events: null, isRefreshing: false}
  }
  componentDidMount () {
    this.getData()
  }

  getData () {
    github.authenticate(API.user)
    github.activity.getEventsReceived({username: API.user.username})
    .then(json => this.setState({events: json.data, isRefreshing: false}))
    .catch(err => console.warn('no events! ' + err))
  }

  render () {
    return (
      <MainContainer>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => {
                this.setState({isRefreshing: true})
                this.getData()
              }}
              tintColor={colors.red}
              title='Loading...'
              titleColor='white'
              colors={[colors.red, colors.green, colors.blue]}
              progressBackgroundColor={colors.grey2}
              />
          }>
          {this.state.events &&
            this.state.events.map(event => {
              return <Event event={event} key={event.id} />
            })
          }
        </ScrollView>
      </MainContainer>
    )
  }
}
