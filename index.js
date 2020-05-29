/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {registerAudioPlayerEventHandler} from './src/audio-player/AudioPlayer';

AppRegistry.registerComponent(appName, () => App);
registerAudioPlayerEventHandler();
