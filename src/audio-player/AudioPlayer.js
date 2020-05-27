"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_track_player_1 = require("react-native-track-player");
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
        var _this = this;
        this.createTrack = function (item) {
            var url = item.url, title = item.title, id = item.id, artwork = item.artwork, artist = item.artist;
            var track = {
                id: id,
                url: url,
                title: title,
                artist: artist,
                artwork: artwork,
                // here we use the voice algorithm, as it improves the quality of speech audio
                pitchAlgorithm: react_native_track_player_1["default"].PITCH_ALGORITHM_VOICE
            };
            return track;
        };
        this.clear = function () {
            react_native_track_player_1["default"].reset();
        };
        this.pause = function () {
            react_native_track_player_1["default"].pause();
        };
        this.isPlaying = function () { return __awaiter(_this, void 0, void 0, function () {
            var currentState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_track_player_1["default"].getState()];
                    case 1:
                        currentState = _a.sent();
                        return [2 /*return*/, currentState === react_native_track_player_1["default"].STATE_PLAYING];
                }
            });
        }); };
        this.togglePlay = function () { return __awaiter(_this, void 0, void 0, function () {
            var isPlaying;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isPlaying()];
                    case 1:
                        isPlaying = _a.sent();
                        if (isPlaying) {
                            return [2 /*return*/, react_native_track_player_1["default"].pause()];
                        }
                        else {
                            return [2 /*return*/, react_native_track_player_1["default"].play()];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.next = function () {
            react_native_track_player_1["default"].skipToNext();
        };
        this.previous = function () {
            react_native_track_player_1["default"].skipToPrevious();
        };
        this.getCurrentTrackId = function () { return __awaiter(_this, void 0, void 0, function () {
            var trackId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, react_native_track_player_1["default"].getCurrentTrack()];
                    case 1:
                        trackId = _a.sent();
                        return [2 /*return*/, trackId];
                }
            });
        }); };
        this.prependToQueue = function (playables) { return __awaiter(_this, void 0, void 0, function () {
            var audioFiles, currentTrackId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audioFiles = Array.isArray(playables)
                            ? playables.map(function (item) { return _this.createTrack(item); })
                            : this.createTrack(playables);
                        return [4 /*yield*/, react_native_track_player_1["default"].getCurrentTrack()];
                    case 1:
                        currentTrackId = _a.sent();
                        react_native_track_player_1["default"].add(audioFiles, currentTrackId);
                        return [2 /*return*/];
                }
            });
        }); };
        this.appendToQueue = function (playables) {
            var audioFiles = Array.isArray(playables)
                ? playables.map(function (item) { return _this.createTrack(item); })
                : _this.createTrack(playables);
            react_native_track_player_1["default"].add(audioFiles);
        };
    }
    AudioPlayer.getInstance = function () {
        if (!AudioPlayer.instance) {
            AudioPlayer.instance = new AudioPlayer();
            AudioPlayer.instance.init();
            return AudioPlayer.instance;
        }
    };
    AudioPlayer.prototype.init = function () {
        // set up the player so we can use it
        react_native_track_player_1["default"].setupPlayer({
            iosCategoryMode: 'spokenAudio'
        });
        // add support for capabilities
        var capabilities = [
            react_native_track_player_1["default"].CAPABILITY_PLAY,
            react_native_track_player_1["default"].CAPABILITY_PAUSE,
            react_native_track_player_1["default"].CAPABILITY_SEEK_TO,
        ];
        // list of options for the player
        var options = {
            stopWithApp: true,
            // An array of media controls capabilities
            capabilities: capabilities,
            // An array of capabilities that will show up when the notification is in the compact form
            compactCapabilities: capabilities
        };
        // update the options
        react_native_track_player_1["default"].updateOptions(options);
    };
    AudioPlayer.addTrackChangeListener = function (callback) {
        react_native_track_player_1["default"].addEventListener('playback-track-changed', callback);
    };
    return AudioPlayer;
}());
exports["default"] = AudioPlayer;
