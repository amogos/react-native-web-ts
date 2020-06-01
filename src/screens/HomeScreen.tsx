import React from 'react';
import {View, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {AudioPlayableAlbum} from '../audio-player/AudioPlayer';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

const testAlbum: AudioPlayableAlbum = {
  tracks: [
    {
      title: 'Tom, Der Lausbub',
      artwork:
      'https://images-na.ssl-images-amazon.com/images/I/51OKaRV52sL._SX354_BO1,204,203,200_.jpg',
      id: 'id02',
      url: require('../audio-player/assets/02TomDerLausbub.mp3'),
      artist: 'Mark Twain',
      duration: 206,
    },
    {
      title: 'Wer Streicht Tante Pollys Zaun',
      artwork:
      'https://images-na.ssl-images-amazon.com/images/I/51OKaRV52sL._SX354_BO1,204,203,200_.jpg',
      id: 'id01',
      url: require('../audio-player/assets/03WerStreichtTantePollysZaun.mp3'),
      artist: 'Mark Twain',
      duration: 278,
    },
    {
      title: 'Tom Trifft Huckleberry Und Lernt Becky Näher Kennen',
      artwork:
      'https://images-na.ssl-images-amazon.com/images/I/51OKaRV52sL._SX354_BO1,204,203,200_.jpg',
      id: 'id03',
      url: require('../audio-player/assets/05TomTrifftHuckleberryUndLerntBeckyNäherKennen.mp3'),
      artist: 'Mark Twain',
      duration: 336,
    },
  ],
  cover: {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51OKaRV52sL._SX354_BO1,204,203,200_.jpg',
    title: 'Tom Sawyers Abenteuer',
  },
};

const AlbumThumbnail = ({
  navigation,
  album,
}: {
  navigation: any;
  album: AudioPlayableAlbum;
}) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('player', {album: testAlbum})}>
      <Image
        borderRadius={10}
        source={{uri: testAlbum.cover.image}}
        style={{width: 120, height: 120}}
      />
    </TouchableHighlight>
  );
};

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{backgroundColor:'#F2F4F4', height:'100%'}}>
      <Text style={{fontSize:24, fontWeight:'bold'}}>Good afternoon, Ana.</Text>
      <Text style={{fontSize:16, fontWeight:'bold', marginTop:20}}>Continue Listening to Your Library</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 20,
          marginTop: 20,
        }}>
        <AlbumThumbnail navigation={navigation} album={testAlbum} />
        <AlbumThumbnail navigation={navigation} album={testAlbum} />
      </View>

      <Text style={{fontSize:16, fontWeight:'bold', marginTop:20}}>Your Recent Albums</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
