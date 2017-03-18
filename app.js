import React from 'react'
import Routes from './app/routes'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: 'https://api.github.com/graphql' })
const client = new ApolloClient({
  networkInterface
})
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }

    // Send the login token in the Authorization header
    req.options.headers.authorization = `Bearer 8f46b2aaf601143e31314a67e1b09b904f85f46e`
    next()
  }
}])

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}
