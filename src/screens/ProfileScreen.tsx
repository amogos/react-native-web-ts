import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {GroupsScreen, ShelvesScreen, BookmarksScreen, MissingScreen} from '.';
import {GetLocalizedStrings} from './../localization/index';

function You({navigation}: {navigation: any}) {
  const localizedStrings = GetLocalizedStrings();

  return (
    <View>
      <ListItem
        onPress={() => navigation.navigate('groups')}
        key={0}
        title={localizedStrings.id_profile_general_groups}
        bottomDivider
        chevron
      />
      <ListItem
        key={1}
        onPress={() => navigation.navigate('bookmarks')}
        title={localizedStrings.id_profile_general_bookmarks}
        bottomDivider
        chevron
      />
      <ListItem
        key={2}
        onPress={() => navigation.navigate('shelves')}
        title={localizedStrings.id_profile_general_shelves}
        bottomDivider
        chevron
      />
      <ListItem
        key={3}
        onPress={() => navigation.navigate('rented-out')}
        title={localizedStrings.id_profile_general_rented_out}
        bottomDivider
        chevron
      />
      <ListItem
        key={4}
        onPress={() => navigation.navigate('reading-list')}
        title={localizedStrings.id_profile_general_reading_list}
        bottomDivider
        chevron
      />
      <ListItem
        key={5}
        onPress={() => navigation.navigate('events')}
        title={localizedStrings.id_profile_general_events}
        bottomDivider
        chevron
      />

      <ListItem
        key={6}
        onPress={() => navigation.navigate('settings')}
        title={localizedStrings.id_profile_settings}
        bottomDivider
        chevron
      />
      <ListItem
        key={7}
        onPress={() => navigation.navigate('customize-interests')}
        title={localizedStrings.id_profile_settings_customize_interests}
        bottomDivider
        chevron
      />

      <ListItem
        key={8}
        onPress={() => navigation.navigate('help')}
        title={localizedStrings.id_profile_help}
        bottomDivider
        chevron
      />
      <ListItem
        key={9}
        onPress={() => navigation.navigate('terms-of-service')}
        title={localizedStrings.id_profile_terms_of_service}
        bottomDivider
        chevron
      />
      <ListItem
        key={10}
        onPress={() => navigation.navigate('privacy-policy')}
        title={localizedStrings.id_profile_privacy_policy}
        bottomDivider
        chevron
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
      <Stack.Screen name="shelves" component={ShelvesScreen} />
      <Stack.Screen name="rented-out" component={MissingScreen} />
      <Stack.Screen name="reading-list" component={MissingScreen} />
      <Stack.Screen name="events" component={MissingScreen} />
      <Stack.Screen name="settings" component={MissingScreen} />
      <Stack.Screen name="customize-interests" component={MissingScreen} />
      <Stack.Screen name="help" component={MissingScreen} />
      <Stack.Screen name="terms-of-service" component={MissingScreen} />
      <Stack.Screen name="privacy-policy" component={MissingScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
