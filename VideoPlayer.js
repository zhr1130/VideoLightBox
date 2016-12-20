'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.state = {
      uri: this.props.item.streamingUrl,
      title: this.props.item.title,
      vendorName: this.props.item.vendorName,
      durationInSeconds: this.props.item.durationInSeconds,
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: false,
      skin: 'custom'
    }
  }

  componentWillUpdate(nextProps, nextState){
    this.state.uri = nextProps.item.streamingUrl;
  }

  playNext(index){
    this.setState({uri: this.state.list[index].streamingUrl});
  }

  onLoad(data) {
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
    this.getCurrentTimePercentage();
  }

  onEnd() {
    this.props.onEnd();
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      var percent = parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      if(percent > 0.95)
      {
        this.playNext(1);
      }
      return parseFloat(this.state.currentTime) / parseFloat(this.state.durationInSeconds);
    } else {
      return 0;
    }
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);
    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.props.onEnd()}}>
          <Video
            source={{uri: this.state.uri}}
            style={styles.nativeVideoControls}
            rate={3}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={'contain'}
            onLoad={(data) => {this.props.onEnd()}}
            onProgress={() => {this.props.onEnd()}}
            onEnd={() => {this.props.onEnd()}}
            repeat={false}
          />
        </TouchableOpacity>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.volumeControl}>
              <Text style={[styles.controlOption, {fontWeight: "normal"}]}>
                 {parseFloat(this.state.currentTime)}
              </Text>
              <Text style={[styles.controlOption, {fontWeight: "normal"}]}>
                 {parseFloat(this.state.duration)}
              </Text>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

export default VideoPlayer;
