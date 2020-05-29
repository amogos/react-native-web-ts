import AudioPlayer, {AudioPlayableItem} from './AudioPlayer'
import { call } from 'react-native-reanimated';

interface AudioPlaylist {
  id: string;
  playableItems: AudioPlayableItem[];
  playingItem: AudioPlayableItem | null;
}

const emptyPlaylist: AudioPlaylist = {
  id: '',
  playableItems: [],
  playingItem: null,
};

class AudioPlaylistController {
  playlist: AudioPlaylist = emptyPlaylist;
  trackChanged:((track: AudioPlayableItem|null) => void) | undefined;

  constructor() {
    AudioPlayer.addTrackChangeListener(this.onTrackChange)
  }

  addTrackChangeListener = (callback : (track:AudioPlayableItem|null) => void) => {
    this.trackChanged = callback;
  }

  getDuration = async () => {
    return await AudioPlayer.getInstance().getDuration();
  }

  private onTrackChange = async (data:any) => {
    await this.updateCurrentPlayingItem();
    if (this.trackChanged) {
      this.trackChanged(this.playlist.playingItem);
    }
  }

  isPlaying = async () => {
    const audioPlayer = AudioPlayer.getInstance();
    return await audioPlayer?.isPlaying();
  }

  togglePlay = async () => {
    const audioPlayer = AudioPlayer.getInstance();
    const isPlaying = await audioPlayer?.isPlaying();

    if (isPlaying) {
      audioPlayer?.togglePlay();
    } else {
      await audioPlayer?.togglePlay();
    }
  }

  pause = () => {
    AudioPlayer.getInstance()?.pause();
  }

  next = async () => {
    const lastTrack = this.playlist.playableItems[this.playlist.playableItems.length - 1];
    if (lastTrack.id !== this.playlist.playingItem?.id) {
      await AudioPlayer.getInstance()?.next();
    }
  }

  previous = async () => {
    const firstTrack = this.playlist.playableItems[0];
    if (firstTrack.id !== this.playlist.playingItem?.id) {
      await AudioPlayer.getInstance()?.previous();
    }
  }

  addToPlaylist = async (...items: AudioPlayableItem[]) => {
    this.playlist.playableItems = [...this.playlist.playableItems, ...items];
    return Promise.all(items.map(item => AudioPlayer.getInstance()?.appendToQueue(item)))
  }

  prependToPlaylist = (...items: AudioPlayableItem[]) => {
    this.playlist.playableItems = [...items, ...this.playlist.playableItems];
    return Promise.all(items.map(item => AudioPlayer.getInstance()?.prependToQueue(item)))
  }

  clearPlaylist = () => {
    this.playlist = emptyPlaylist;
    return AudioPlayer.getInstance()?.clear();
  }

  private updateCurrentPlayingItem = async () => {
    const playingItemId = await AudioPlayer.getInstance()?.getCurrentTrackId();
    // no playing item and therefore listener is being trigged on a abnormal situation (e.g. logging out)
    if (playingItemId === null) {
        return
    }

    const playingItem = this.playlist.playableItems.find(item => item.id === playingItemId)

    if (!playingItem) {
        throw new Error('Changed track to an item that has not been added to the playlist')
    }

    this.playlist.playingItem = playingItem;

    return playingItem;
  }
}

const audioPlaylistController = new AudioPlaylistController()
export default audioPlaylistController;