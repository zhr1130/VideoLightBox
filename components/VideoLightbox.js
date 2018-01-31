'use strict';

import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import _ from 'lodash';

import VideoPlayer from './VideoPlayer';
import ClickListView from './ClickListView';

var playListData = require('../config/itemDetails.json');

class VideoLightbox extends Component {
  constructor(props) {
    super(props);
    var items = _.map(playListData.items, (item) => {
    return {
      id: item.id,
      title: item.productData.title,
      vendorName: item.productData.vendorName,
      streamingUrl: item.mediaInfoSection.mediaInfoList[0].streamingUrl,
      durationInSeconds: item.mediaInfoSection.mediaInfoList[0].durationInSeconds
      }
    });
    this.state = {
      seedAsin: 'B00G5G7EXY',
      videoItems: items,
      currentIndex: 0,
      currentItem : ''
    };
    this.onClick = this.onClick.bind(this);
  }

  onEnd = (index) => {
    if((typeof this.state.videoItems != 'undefined') && this.state.currentIndex !== this.state.videoItems.length)
    {
      this.setState({currentIndex: index});
    }
  }

  onClick = (asin) => {
    for(var i = 0; i < this.state.videoItems.length; i += 1) {
        if(this.state.videoItems[i].id === asin) {
            this.onEnd(i);
            break;
        }
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.top}>
          <VideoPlayer
              item={this.state.videoItems[this.state.currentIndex]}
              onEnd={this.onEnd}
          />
          </View>
          <View style={styles.bottom}>
            <ClickListView
                relatedVideos={this.state.videoItems}
                onClick={this.onClick}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex:1,
    flexDirection: 'column'
  },
  top:{
    flex:4
  },
  bottom:{
    flex:6
  }
});

export default VideoLightbox;
