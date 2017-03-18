import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './scenes/home'
// import ProfilePage from './scenes/profile-page'
// import MyProfile from './scenes/my-profile'
// import RepoPage from './scenes/repo-page'
import CreateRepo from './scenes/create-repo'
// import Notifications from './scenes/notifications'
// import Login from './scenes/new-login'
// import Search from './scenes/search'
import colors from './colors'

const StackRoutes = {
  Home: {
    title: 'Home',
    description: 'homepage',
    screen: Home
  }
  // Login: {
  //   title: 'Login',
  //   description: 'login',
  //   screen: Login
  // },
  // Profile: {
  //   path: 'people/:name',
  //   screen: ProfilePage
  // },
  // Repo: {
  //   title: 'Repos',
  //   path: 'repos/:id',
  //   screen: RepoPage
  // }
}

function createTab (title, screen, icon) {
  return {
    title,
    screen,
    navigationOptions: {
      tabBar: () => ({
        icon: ({tintColor}) => (
          <Icon
            name={icon}
            size={24}
            style={{ color: tintColor }}
          />
        )
      })
    }
  }
}

const StackConfig = {
  cardStyle: {
    backgroundColor: colors.grey0
  },
  navigationOptions: {
    header: () => ({
      titleStyle: {
        color: 'white',
        backgroundColor: colors.grey0
      },
      tintColor: 'white',
      style: {
        backgroundColor: colors.grey0
      }
    })
  }
}
const TabRoutes = {
  Home: createTab('home', StackNavigator(StackRoutes, StackConfig), 'home'),
  // Search: createTab('explore', Search, 'magnify'),
  Create: createTab('create', CreateRepo, 'plus-circle')
  // Activity: createTab('activity', Notifications, 'comment-multiple-outline'),
  // Me: createTab('me', MyProfile, 'account')
}
TabRoutes.Create.navigationOptions.tabBar = () => ({
  icon: ({tintColor}) => (
    <Icon
      name={'plus-circle'}
      size={24}
      style={{ color: colors.red }}
    />
  )
})

const TabConfig = {
  animationEnabled: false,
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: 'white',
    inactiveTintColor: '#ccc',
    style: {
      backgroundColor: colors.grey0
    },
    indicatorStyle: {
      backgroundColor: colors.red
    }
  }
}

const Routes = TabNavigator(TabRoutes, TabConfig)
export default Routes
