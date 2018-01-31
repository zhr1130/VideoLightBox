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
      < TouchableOpacity style={styles.container} onPress={() => {this.setState({paused: !this.state.paused})}}>
            <TouchableOpacity style={styles.fullScreen}>
              <Video
                source={{uri: this.state.uri}}
                style={styles.nativeVideoControls}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={'contain'}
                controls={true}
              />
            </TouchableOpacity>
            <View style={styles.controls}>
                  {this.renderVolumeControl(0.5)}
                  {this.renderVolumeControl(1)}
                  {this.renderVolumeControl(1.5)}
            </View>
     </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '#999999'
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  nativeVideoControls: {
    paddingTop:30,
    height: 300,
  },
  controls: {
    backgroundColor: "black",
    flexDirection: 'row',
    position: 'absolute',
    bottom:0,
    left:0,
    right:0
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  }
});

export default VideoPlayer;
