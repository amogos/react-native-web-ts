import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {GroupsScreen, ShelvesScreen, BookmarksScreen, MissingScreen} from '.';
import {GetLocalizedStrings} from './../localization/index';

export default ({navigation}: {navigation: any}) => {
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
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
