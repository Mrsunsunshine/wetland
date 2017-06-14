import React, { Component } from 'react';
import {  StyleSheet, Image, TouchableOpacity,Text,View } from 'react-native';

import { screen} from '../../common/screen'

export default  class SpeciesItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='stretch' style={styles.icon} />
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2,
        height: screen.width / 2,
    },
    icon: {
        width: screen.width * 0.45,
        height: screen.width * 0.4,
    },
    text: {
        width:screen.width * 0.45,
        height:screen.width * 0.07,
        backgroundColor: '#EBEBEB',
        textAlign:'center',
        textAlignVertical: 'center',
    },
});

