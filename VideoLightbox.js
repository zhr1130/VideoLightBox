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

var playListData = require('./config/itemDetails.json');

class VideoLightbox extends Component {
  constructor() {
    super();
    var items = _.map(playListData.items, (item) => {
      return {
        id: item.id,
        title: item.productData.title,
        vendorName: item.productData.vendorName,
        streamingUrl: item.mediaInfoSection.mediaInfoList[0].streamingUrl,
        durationInSeconds: item.mediaInfoSection.mediaInfoList[0].durationInSeconds
      }
    });
    console.log(items);
    this.state = {
      videoItems: items,
      currentIndex: 0,
      currentItem : items[0]
    };
  }

  onEnd = () => {
    var nextIndex = this.state.currentIndex + 1;
    alert('Done!');
    this.setState({currentIndex: nextIndex,
                   currentItem:  this.state.videoItems[nextIndex]});
  }

  render() {
    return (
      <VideoPlayer
          item={this.state.currentItem}
          onEnd={this.onEnd}
      />
    );
  }
}

export default VideoLightbox;
