import TrackPlayer from 'react-native-track-player';

export default async function() {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
  TrackPlayer.addEventListener('remote-seek', (seconds: number) =>
    TrackPlayer.seekTo(seconds),
  );
  TrackPlayer.addEventListener('remote-seek', (seconds: number) =>
  TrackPlayer.seekTo(seconds),
);
}
