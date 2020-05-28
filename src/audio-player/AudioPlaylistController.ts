import AudioPlayer, {AudioPlayableItem} from './AudioPlayer'

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

  constructor() {
    AudioPlayer.addTrackChangeListener(this.onTrackChange)
  }

  private onTrackChange = async () => {
    await this.updateCurrentPlayingItem()
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

  pause = () =>{
    AudioPlayer.getInstance()?.pause();
  }

  next = () => {
    AudioPlayer.getInstance()?.next();
  }

  previous = () => {
    AudioPlayer.getInstance()?.previous();
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