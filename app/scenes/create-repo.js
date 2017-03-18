/**
 * Created by ta on 3/2/17.
 */
'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Picker
} from 'react-native'
import MainContainer from '../containers/main-container'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import API from '../api/api'
import Text from '../atoms/text'
import Input from '../atoms/input'
import Title from '../atoms/title'
import Button from '../atoms/button'
import Row from '../basics/row'
import Toggle from '../components/toggle-row'
import Select from '../components/select-row'
import colors from '../colors'
import github from '../github'
import Utils from '../utils'

export default class CreateRepo extends Component {
  constructor (props) {
    super(props)
    this.userPrefix = API.user.username + '/'

    this.state = {
      newRepo: {
        gitIgnoreTemplate: null,
        license_template: null,
        auto_init: false,
        name: '',
        private: false,
        has_issues: true,
        has_wiki: true,
        has_downloads: true
      },
      gitIgnoreTemplates: [],
      licenses: [],
      repoNames: [],
      loading: false,
      show_more: false
    }
  }

  componentWillMount () {
    API.getLicenses()
      .then(data => this.setState({licenses: data}))
    github.misc.getGitignoreTemplates({})
      .then(res => {
        this.setState({gitIgnoreTemplates: res.data})
      })
      .catch(err => console.warn('err! ' + err))
    this.onChangeTitle = Utils.debounce(this.onChangeTitle, 10000, true)
  }
  onChangeTitle (text) {
    this.setState({loading: true})
    github.authenticate(API.user)
    github.repos.getAll({})
      .then(json => this.setState({
        repoNames: json.data.map(repo => repo.name),
        loading: false
      }))
      .catch(err => console.warn('no repos! ' + err))
  }

  renderPickers () {
    return (
      <View>
        <Picker
          prompt={'hello'}
          mode={'dropdown'}
          style={{color: 'white'}}
          onValueChange={value => this.setState({license_template: value})}
         />
        <Picker
          mode={'dropdown'}
          style={{color: 'white'}}
        >
          {this.state.gitIgnoreTemplates.map(template => {
            return <Picker.Item
              key={template}
              value={template}
              label={template}
            />
          })}
        </Picker>
      </View>
    )
  }
  renderOptions () {
    let newRepo = this.state.newRepo
    let togglePrivate = () => {
      newRepo.private = !newRepo.private
      this.setState({newRepo})
    }
    let toggleReadme = () => {
      newRepo.auto_init = !newRepo.auto_init
      this.setState({newRepo})
    }
    let setLicense = (value) => {
      newRepo.license_template = value
      this.setState({newRepo})
    }
    return (
      <View style={{flex: 1}}>
        <Toggle
          text={'Make this repository: ' + (newRepo.private ? 'private' : 'public')}
          onPress={() => togglePrivate()}
          enabled={!newRepo.private}
          icon={['lock-open-outline', 'lock-outline']}
        />
        <Toggle
          text={'Initialize this repository with a readme: '}
          onPress={() => toggleReadme()}
          enabled={newRepo.auto_init}
        />
        <Select
          text={'Create .gitignore: ' + (newRepo.gitIgnoreTemplate || 'no')}
          enabled={!!newRepo.gitIgnoreTemplate}
          options={this.state.gitIgnoreTemplates.map(template => {
            return ({
              label: template || 'INVALID',
              value: template || 'INVALID'
            })
          })}
        />
        <Select
          onValueChange={setLicense}
          text={'Add a license: ' + (newRepo.license_template || 'no')}
          enabled={!!newRepo.license_template}
          options={this.state.licenses.map(license => {
            return ({
              label: license.name || 'INVALID',
              value: license.key || 'INVALID'
            })
          })}
        />
      </View>
    )
  }

  render () {
    let newRepo = this.state.newRepo
    let available = !this.state.repoNames.find(name => name === newRepo.name)
    return (
      <MainContainer style={{flex: 1}}>
        <View style={{padding: 16, flex: 1}}>
          <Title>Create a Repository</Title>
          <Row>
            <Input
              style={{
                color: 'white',
                fontSize: 24,
                flex: 1
              }}
              autofocus
              autocorrect={false}
              placeholder='repository_name'
              onChangeText={text => {
                newRepo.name = text
                this.setState({newRepo})
                this.onChangeTitle(text)
              }}
              value={newRepo.name}
            />
            {newRepo.name !== '' && <Icon
              name={available ? 'checkbox-marked-circle-outline' : 'alert-circle-outline'}
              color={available ? colors.green : colors.red}
              size={24} />}
          </Row>
          <Row style={{ marginTop: -12, paddingHorizontal: 4 }}>
            <Text style={styles.text}>
              {API.user.username +
               '/' +
               (newRepo.name || 'repository_name') +
               (available ? '' : ' is taken, try another name')}
            </Text>
            <Text>{this.state.loading && 'loading...'}</Text>
          </Row>
          <View>
            <Input
              placeholder='description (optional)'
            />
          </View>

          {this.renderOptions()}
        </View>
        <Button
          title={'Create ' + newRepo.name + '!'}
          color={colors.green}
          onPress={() => {}}
        />
      </MainContainer>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    color: colors.grey3,
    fontSize: 14
  },
  row: {
    borderTopColor: colors.grey2,
    borderTopWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 4
  }
})
