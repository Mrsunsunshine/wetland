import React, {Component} from 'react'
import {
    Text,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import TabBarItem from './widget/TabBarItem';
import  SpeciesHome from  './screen/Species/SpeciesHome';
import  Map from  './screen/Map/Map';

class Demo extends Component {
    static navigationOptions = ({ navigation }) => ({
        header:null,
    })
    render() {
        return <Text>List of all contacts</Text>
    }
}
export default class Index extends Component{
 render(){
     return (<Navigator />);
 }
}

const  Tab = TabNavigator(
    {
        Article:{
          screen:Demo,
          navigationOptions: ({ navigation }) => ({
                tabBarLabel: '社区',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
        Map: {
            screen:Map,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '地图',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
        List:{
            screen:SpeciesHome,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '列表',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
        Discover:{
            screen:Demo,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '发现',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
        Mine: {
            screen:Demo,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
    }, {
        tabBarComponent: TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
            showLabel: true,
            showIcon:true,
        },
        initialRouteName:'List',
    }
)
const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
    }
);