import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import RelayEnvironment from './RelayEnvironment';
import {withNavigation} from 'react-navigation';
import {withEnvironment} from './hoc';

import {
  HomeScreen,
  ProfileScreen,
  ShelvesScreen,
  NotificationsScreen,
  BookmarksScreen,
  SearchScreen,
  GroupsScreen,
  MissingScreen,
} from './screens';

import {BottomTabIcons} from './icons';

const {
  HomeTabIcon,
  HomeTabIconFocused,
  ProfileTabIcon,
  ProfileTabIconFocused,
  UndefinedIcon,
  BookshelfTabIcon,
  BookshelfTabIconFocused,
  NotificationTabIcon,
  NotificationTabIconFocused,
  BookmarksTabIcon,
  BookmarksTabIconFocused,
} = BottomTabIcons;

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'home') {
            return focused ? <HomeTabIconFocused /> : <HomeTabIcon />;
          } else if (route.name === 'bookmarks') {
            return focused ? <BookmarksTabIconFocused /> : <BookmarksTabIcon />;
          } else if (route.name === 'bookshelves') {
            return focused ? <BookshelfTabIconFocused /> : <BookshelfTabIcon />;
          } else if (route.name === 'notifications') {
            return focused ? (
              <NotificationTabIconFocused />
            ) : (
              <NotificationTabIcon />
            );
          } else if (route.name === 'profile') {
            return focused ? <ProfileTabIconFocused /> : <ProfileTabIcon />;
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
};

const MainStack = createStackNavigator();

const HomeStack = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="home" component={BottomTabs} />
      <MainStack.Screen name="search" component={SearchScreen} />
      <MainStack.Screen name="groups" component={GroupsScreen} />
      <MainStack.Screen name="bookmarks" component={BookmarksScreen} />
      <MainStack.Screen name="shelves" component={ShelvesScreen} />
      <MainStack.Screen name="rented-out" component={MissingScreen} />
      <MainStack.Screen name="reading-list" component={MissingScreen} />
      <MainStack.Screen name="events" component={MissingScreen} />
      <MainStack.Screen name="settings" component={MissingScreen} />
      <MainStack.Screen name="customize-interests" component={MissingScreen} />
      <MainStack.Screen name="help" component={MissingScreen} />
      <MainStack.Screen name="terms-of-service" component={MissingScreen} />
      <MainStack.Screen name="privacy-policy" component={MissingScreen} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <HomeStack />
  </NavigationContainer>
);
