/**
 * Created by ta on 2/2/17.
 */
'use strict'

import React, { Component } from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import base64 from 'base-64'
import FileList from '../components/repo/file-list'
import github from '../github'
import Text from '../basics/text/text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import API from '../api/api'
import colors from '../colors'
import Markdown from 'react-native-simple-markdown'

export default class RepoPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      repo: null,
      content: [],
      readme: null
    }
  }
  componentDidMount () {
    let {user, repo} = this.props.navigation.state.params
    github.authenticate(API.user)
    github.repos.get({owner: user, repo: repo})
      .then(res => {
        this.setState({repo: res.data})
      })
      .catch(err => console.warn('error getting repo! \n', err))
    github.authenticate(API.user)
    github.repos.getContent({owner: user, repo: repo, path: ''})
      .then(res => {
        this.setState({content: res.data})
      })
      .catch(err => console.warn('error getting content! \n', err))
    github.authenticate(API.user)
    github.repos.getReadme({owner: user, repo})
      .then(res => {
        let readme = base64.decode(res.data.content)
        console.warn(readme)
        this.setState({readme})
      })
  }

  renderInfo () {
    let {repo} = this.props.navigation.state.params
    return (
      <View style={{padding: 8}}>
        <Text style={{fontWeight: 'bold'}}>{repo.name}</Text>
        <Text>{repo.description}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='source-fork' size={16} color={colors.grey5} />
          <Text style={{color: colors.grey5}}>{repo.forks}</Text>
        </View>
      </View>

    )
  }
  renderReadme () {
    return (<Markdown
      styles={{
        heading1: {
          fontSize: 20
        },
        strong: {
          fontWeight: 'bold'
        }
      }}
    >
      {JSON.stringify(this.state.readme)}
    </Markdown>)
  }
  render () {
    return (
      <ScrollView>
        {this.renderInfo()}
        <FileList
          content={this.state.content}
        />
        <View>
          {this.renderReadme()}
          <Text>{this.state.readme}</Text>
        </View>
      </ScrollView>
    )
  }
}
