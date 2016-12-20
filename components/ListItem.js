import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import convertVideoRuntime from '../utils/convertVideoRuntime';

class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                <View style={{flexDirection: 'row', height: 100, padding: 20}}>
                    <Image source = {{uri: this.props.item.metadata.image.imageUrl}} style={{width: 100, height: 70}} />
                    <View style={{flexDirection: 'column'}}>
                        <Text>{this.props.item.metadata.title}</Text>
                        <Text>By {this.props.item.metadata.vendorName}</Text>
                        <Text>{convertVideoRuntime(this.props.item.metadata.runtime)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressButton() {
        alert(this.props.item.metadata.title);
    }
}

module.exports = ListItem;