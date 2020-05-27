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
        title="groups"
        onPress={() => navigation.navigate('groups')}
        type="clear"
      />
      <Button
        title="bookmarks"
        onPress={() => navigation.navigate('bookmarks')}
        type="clear"
      />
      <Button
        title="myshelves"
        onPress={() => navigation.navigate('myshelves')}
        type="clear"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default (props: any) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="you" component={You} />
      <Stack.Screen name="groups" component={GroupsScreen} />
      <Stack.Screen name="bookmarks" component={BookmarksScreen} />
      <Stack.Screen name="myshelves" component={ShelvesScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
