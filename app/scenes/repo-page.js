/**
 * Created by ta on 2/2/17.
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  View
} from 'react-native';
import RepoTabs from '../containers/repo-tabs'
import FileList from '../containers/file-list'
import github from '../github';
import Text from '../atoms/text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import API from '../api/api'
import colors from '../colors'


export default class RepoPage extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.repo.full_name,
  };
  state = {
    repo:null,
    content:[]
  }
  componentDidMount(){
    let {repo} = this.props.navigation.state.params
    github.authenticate(API.user)
    github.repos.get({owner:repo.owner.login,repo:repo.name})
      .then(res=>{
        this.setState({repo:res.data});
      })
      .catch(err=>console.warn(err))
    //github.authenticate(API.user)
    github.repos.getContent({owner:repo.owner.login,repo:repo.name,path:''})
      .then(res=>{
        this.setState({content:res.data});
      })
      .catch(err=>console.warn(err))
  }


  renderInfo(){
    if(true){
      let {repo} = this.props.navigation.state.params
      return(
        <View style={{padding:8}}>
            <Text style={{fontWeight:'bold'}}>{repo.name}</Text>
            <Text>{repo.description}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="source-fork" size={16} color={colors.grey5} />
                <Text style={{color:colors.grey5}}>{repo.forks}</Text>
            </View>
        </View>

      )
    }
  }
  render() {
    let {repo} = this.props.navigation.state.params
    return (
      <ScrollView>
        {this.renderInfo()}
        <RepoTabs />
        <FileList
          content={this.state.content}
        />
      </ScrollView>
    );
  }
}