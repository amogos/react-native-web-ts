import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {View, StyleSheet} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';
import GroupsScreen from './GroupsScreen';
import ShelvesScreen from './ShelvesScreen';
import BookmarksScreen from './BookmarksScreen';

function You({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Button
        title="Groups"
        onPress={() => navigation.navigate('Groups')}
        type="clear"
      />
      <Button
        title="Bookmarks"
        onPress={() => navigation.navigate('Bookmarks')}
        type="clear"
      />
      <Button
        title="My Shelves"
        onPress={() => navigation.navigate('MyBookshelves')}
        type="clear"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default (props: any) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="You" component={You} />
      <Stack.Screen name="Groups" component={GroupsScreen} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      <Stack.Screen name="MyBookshelves" component={ShelvesScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
