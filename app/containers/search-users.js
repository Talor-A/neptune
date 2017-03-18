/**
 * Created by ta on 3/4/17.
 */
import React, { Component } from 'react'
import Text from '../atoms/text'

export default class SearchUsers extends Component {
  render () {
    return (
      <Text>query: {this.props.query}</Text>
    )
  }
}
