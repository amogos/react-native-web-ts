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
  ErrorScreen,
  LoadingScreen,
  ShelvesScreen,
  NotificationsScreen,
  BookmarksScreen,
  SearchScreen,
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
}

const MainStack = createStackNavigator();

const HomeStack = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="home" component={BottomTabs} />
      <MainStack.Screen name="search" component={SearchScreen} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <HomeStack />
  </NavigationContainer>
);
