import React, {Component} from 'react';
import {Text, View} from  'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};
        setInterval(()=>{
            this.setState(previousState =>{
                return { showText: !previousState.showText};
            });
            },1000
        );
    }
    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

export  default  class State extends Component {
    render() {
        return (
            <View>
                <Blink text="I am best man"/>
                <Blink text="are you kidding me?"/>
                <Blink text="no, blinking, blinking, blinking"/>
            </View>
        );
    }
}