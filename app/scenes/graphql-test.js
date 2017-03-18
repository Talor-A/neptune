import React, { Component } from 'react'
import Text from '../basics/text/text'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const myQuery = gql`
{
  viewer {
    email
    repositories(first: 100){
      nodes {
        name
        stargazers  (first: 100){
            nodes{
              id
            }
        }
      }
    }
  }
}

`

const GQLWithData = graphql(myQuery)(Inner)
function Inner (props) {
  return (
    <Text>{JSON.stringify(props.data)}</Text>
  )
}

class GraphQLTest extends Component {

  render () {
    return (
      <GQLWithData />
    )
  }
}

export default GraphQLTest
