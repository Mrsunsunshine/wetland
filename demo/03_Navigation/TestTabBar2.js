import { TabNavigator ,TabBarBottom} from "react-navigation";
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
class RecentChatsScreen extends Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

export  default  TestTabBar2 = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
},  {
        tabBarComponent: TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }
);