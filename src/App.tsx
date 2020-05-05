import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

import {graphql, QueryRenderer} from 'react-relay';
import {Button} from 'react-native-elements';
import RelayEnv from './env/relay.env';

const logo = require('./logo.png');

interface Props {
  allAuthors: any;
}

const renderQuery = ({error, props}: {error:any, props:any}) => {
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create React Native Web App</Text>
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
      <Button title={JSON.stringify(props.allAuthors)} />
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
            firstName
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
