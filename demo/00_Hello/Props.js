import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text> Hello, {this.props.name} ! </Text>
        );
    }
}

export  default  class Props extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Zhang"/>
                <Greeting name="Sun"/>
                <Greeting name="Wang"/>
            </View>
        );
    }
}