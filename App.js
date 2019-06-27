import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Trending from './screens/Trending';
import Subscriptions from './screens/Subscriptions';
import Inbox from './screens/Inbox';
import Library from './screens/Library';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const tabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Trending: Trending,
    Subscriptions: Subscriptions,
    Inbox: Inbox,
    Library: Library
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: '#444',
        color: '#888'
      },
      activeTintColor: '#fff',
      pressColor: '#fff'
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focussed, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <MaterialIcons name='home' size={20} style={{ color: tintColor }} />
          );
        } else if (routeName === 'Trending') {
          return (
            <MaterialCommunityIcons
              name='fire'
              size={20}
              style={{ color: tintColor }}
            />
          );
        } else if (routeName === 'Subscriptions') {
          return (
            <MaterialIcons
              name='subscriptions'
              size={20}
              style={{ color: tintColor }}
            />
          );
        } else if (routeName === 'Inbox') {
          return (
            <FontAwesome
              name='envelope'
              size={20}
              style={{ color: tintColor }}
            />
          );
        } else {
          return (
            <Octicons
              name='file-directory'
              size={20}
              style={{ color: tintColor }}
            />
          );
        }
      }
    }),
    navigationOptions: {
      gestureEnabled: true
    }
  }
);

const TabContainer = createAppContainer(tabNavigator);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabContainer />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
