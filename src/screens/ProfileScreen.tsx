import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {GetLocalizedStrings} from './../localization/index';
import {ScrollView} from 'react-native-gesture-handler';

export default ({navigation}: {navigation: any}) => {
  const localizedStrings = GetLocalizedStrings();
  let id = 0;
  return (
    <ScrollView>
      <View>
        <Text>{localizedStrings.id_profile_general}</Text>
        <ListItem
          onPress={() => navigation.navigate('groups')}
          key={id++}
          title={localizedStrings.id_profile_general_groups}
          bottomDivider
          chevron
        />
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('stats')}
          title={localizedStrings.id_profile_general_stats}
          bottomDivider
          chevron
        />
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('events')}
          title={localizedStrings.id_profile_general_events}
          bottomDivider
          chevron
        />
      </View>

      <View>
      <Text></Text>
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('settings')}
          title={localizedStrings.id_profile_settings}
          bottomDivider
          chevron
        />
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('customize-interests')}
          title={localizedStrings.id_profile_settings_customize_interests}
          bottomDivider
          chevron
        />
      </View>

      <View>
      <Text></Text>
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('help')}
          title={localizedStrings.id_profile_help}
          bottomDivider
          chevron
        />
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('terms-of-service')}
          title={localizedStrings.id_profile_terms_of_service}
          bottomDivider
          chevron
        />
        <ListItem
          key={id++}
          onPress={() => navigation.navigate('privacy-policy')}
          title={localizedStrings.id_profile_privacy_policy}
          bottomDivider
          chevron
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
