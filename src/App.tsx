import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay';
import {Image} from 'react-native-elements';
import RelayEnv from './env/relay.env';

const logo = require('./logo.png');

interface Props {
  allAuthors: any;
}

const renderQuery = ({error, props}: {error: any; props: any}) => {
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!props) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuqL5v3VYHbNJYWi8M1KwceXLK01c-PB7maW8IiwoEEUHrsHv4&usqp=CAU',
        }}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.tech}>
        <Image
          source={{uri: 'data:image/png;base64,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'}}
          style={{width: 100, height: 100}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Image
          source={{
            uri: 'data:image/png;base64,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',
          }}
          style={{width: 100, height: 100}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Image
          source={{
            uri: 'https://cdn.auth0.com/blog/testing-react-with-jest/logo.png',
          }}
          style={{width: 100, height: 100}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Text style={styles.title}>React Native Web App Skeleton, TS And GraphQL Ready</Text>
      <Text style={styles.text}>
        Open up src/App.js to start working on your app!
      </Text>
      <Text style={styles.text}>
        Changes you make will automatically reload.
      </Text>
      {Platform.OS !== 'web' && (
        <Text style={styles.text}>
          Shake your phone to open the developer menu.
        </Text>
      )}
    </View>
  );
};

const App = (props: any) => {
  return (
    <QueryRenderer
      environment={RelayEnv}
      query={graphql`
        query AppQuery {
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tech: {
    flexDirection: 'row',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
