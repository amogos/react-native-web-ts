import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {withNavigation} from 'react-navigation';

import RelayEnvironment from './RelayEnvironment';
import {GetLocalizedStrings} from './localization';
import {withEnvironment} from './hoc';

import {
  HomeScreen,
  SearchScreen,
  ProfileScreen,
  ErrorScreen,
  LoadingScreen,
  ShelvesScreen,
  NotificationsScreen,
  BookmarksScreen,
} from './screens';

import {
  HomeTabIcon,
  ProfileTabIcon,
  SearchTabIcon,
  UndefinedIcon,
  BookshelfTabIcon,
  NotificationTabIcon,
  BookmarksTabIcon,
} from './icons';

const Stack = createStackNavigator();

function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={ErrorScreen} />
      <Stack.Screen name="Notifications" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Home() {
  const translations = GetLocalizedStrings();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'home') {
            return focused ? <HomeTabIcon /> : <HomeTabIcon />;
          } else if (route.name === 'bookmarks') {
            return focused ? <BookmarksTabIcon /> : <BookmarksTabIcon />;
          } else if (route.name === 'bookshelves') {
            return focused ? <BookshelfTabIcon /> : <BookshelfTabIcon />;
          } else if (route.name === 'notifications') {
            return focused ? <NotificationTabIcon /> : <NotificationTabIcon />;
          } else if (route.name === 'profile') {
            return focused ? <ProfileTabIcon /> : <ProfileTabIcon />;
          }
          return <UndefinedIcon />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen
        name="home"
        component={withEnvironment(
          withNavigation(HomeScreen),
          RelayEnvironment,
        )}
      />
      <Tab.Screen
        name="bookmarks"
        component={withEnvironment(
          withNavigation(BookmarksScreen),
          RelayEnvironment,
        )}
      />
      <Tab.Screen
        name="bookshelves"
        component={withEnvironment(
          withNavigation(ShelvesScreen),
          RelayEnvironment,
        )}
      />
      <Tab.Screen
        name="notifications"
        component={withEnvironment(
          withNavigation(NotificationsScreen),
          RelayEnvironment,
        )}
      />
      <Tab.Screen
        name="profile"
        component={withEnvironment(
          withNavigation(ProfileScreen),
          RelayEnvironment,
        )}
      />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <Home />
  </NavigationContainer>
);
