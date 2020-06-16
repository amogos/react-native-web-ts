import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './BookmarksScreenHeader';

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <SafeAreaView>
      <Header {...props} />
      <ScrollView>
        <Text>Bookmarks Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
