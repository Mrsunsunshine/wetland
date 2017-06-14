import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
//github https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md
import { Router, Scene, Actions, Schema } from 'react-native-router-flux';
import TabBarItem from './TabBarItem';
import TabView from  './TabView';
export  default  class TestTabBar extends Component {
    render() {
        return (
            <Router
                ref='router'
                titleStyle={styles.navigationBarTitle}
                barButtonIconStyle={styles.navigationBarButtonIcon}
                navigationBarStyle={styles.navigationBarStyle}
                panHandlers={null}
                onSelect={el => {
                    const  {sceneKey} = el.props //ES6 语法，解构出属性对应的值http://es6.ruanyifeng.com/
                    Actions[sceneKey]()//执行Actions函数
                }}
                backAndroidHandler ={()=>{
                    return false}}
            >

                <Scene
                    initial
                    key='tabBar'
                    tabs
                    tabBarStyle={styles.tabBar}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItem}
                    tabBarSelectedTitleStyle={styles.tabBarSelectedTitle}
                    tabBarUnselectedTitleStyle={styles.tabBarUnselectedTitle}

                >
                    <Scene
                        key='home'
                        title='团购'
                        component={TabView}
                        image={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}

                        icon={TabBarItem}

                        navigationBarStyle={{ backgroundColor: '#06C1AE' }}
                        titleStyle={{ color: 'white' }}
                        statusBarStyle='light-content'

                    />
                    <Scene
                        key='merchant'
                        component={TabView}
                        title='附近'
                        image={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}

                        icon={TabBarItem}
                    />
                    <Scene
                        key='order'
                        component={TabView}
                        title='订单'
                        image={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}

                        icon={TabBarItem}
                    />
                    <Scene
                        key='mine'
                        component={TabView}
                        title='我的'
                        image={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}

                        icon={TabBarItem}

                        hideNavBar
                        statusBarStyle='light-content'
                    />
                </Scene>
            </Router>
        );
    }

}

// define your styles
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
    },
    tabBarSelectedItem: {
        backgroundColor: '#ffffff',
    },

    tabBarSelectedTitle: {
        color: '#06C1AE',
    },
    tabBarUnselectedTitle: {
        color: '#979797',
    },

    tabBarSelectedImage: {
        tintColor: '#06C1AE',
    },
    tabBarUnselectedImage: {
        tintColor: '#979797'
    },

    navigationBarStyle: {
        backgroundColor: 'white'
    },
    navigationBarTitle: {
        color: '#333333'
    },
    navigationBarButtonIcon: {
        tintColor: '#06C1AE',
    },
});
