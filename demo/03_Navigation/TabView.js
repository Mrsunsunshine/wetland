import React ,{PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";

const propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const TabView = (props) => {
    return (
        <View style={[styles.container, props.sceneStyle ]}>
            <Text>Tab {props.title}</Text>
        </View>
    );
};

TabView.propTypes = propTypes;

export default TabView;