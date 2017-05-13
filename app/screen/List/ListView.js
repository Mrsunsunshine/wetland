import React, {Component} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    FlatList
} from 'react-native';
import ListItem from  './ListItem';
import { screen} from '../../common/screen'
import NavigationItem from '../../widget/NavigationItem';
export default class ListView extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/list/search_icon.png')} style={styles.searchIcon} />
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                title='筛选'
                titleStyle={{ color: 'white' }}
                onPress={() => {}}>
            </NavigationItem>
        ),
        headerLeft:(
            <NavigationItem
                title='搜索'
                titleStyle={{ color: 'white' }}
                onPress={() => {}}>
            </NavigationItem>
        ),
        headerStyle: { backgroundColor: '#06C1AE',height:50 },
    })
    render() {
        let dataArray = [];
        for(let i = 0; i < 20; i++) {
            dataArray.push({key:i});
        }
        return (
            <FlatList
                style={{marginTop:5}}
            horizontal={false}
            numColumns={2}
            data = {dataArray}
            renderItem={({item}) => (<ListItem icon={require('../../img/list/test.jpg')} title='叉尾太阳鸟'></ListItem>)}
        />);
    }
}
const styles = StyleSheet.create({
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});