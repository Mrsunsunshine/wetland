import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    WebView
} from 'react-native';
import { baiduMap } from '../../common/baiduMap';
export default class Map extends Component{
    static navigationOptions = ({ navigation }) => ({
        header:null,
    })
    render() {
        return (<View style={styles.container}>
            <WebView
                style={{flex: 1}}
                source={baiduMap.map_path}
                domStorageEnabled={true}
                javaScriptEnabled={true}
                startInLoadingState={true}/>
        </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    }

})