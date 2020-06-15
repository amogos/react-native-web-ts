import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay';
import {ErrorScreen, LoadingScreen} from '.';
import {HomeTabIcon} from '../icons';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

export default (props: any) => {
  const {navigation, environment} = props;

  const renderQuery = (renderProps: any) => {
    const {error, props} = renderProps;

    if (error) {
      return <ErrorScreen navigation={navigation} error={renderProps.error} />;
    }
    if (!props) {
      return <LoadingScreen navigation={navigation} />;
    }

    return (
      <View style={styles.container}>
        <HomeTabIcon />
      </View>
    );
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query HomeScreenQuery {
          allAuthors {
            id
            firstName
            lastName
          }
        }
      `}
      render={renderQuery}
      variables={{}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
