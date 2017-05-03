import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
}from 'react-native';

export default class FetchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {weather: null};
    }

    render() {
        let item = this.state.weather;
        if(item) {
            return this.renderItem(item);
        }
        return (
            <Text style={{textAlign:"center", textAlignVertical:"center",fontSize:30,color:"blue"}}>加载中...</Text>
        );
    }

    renderItem(item) {
        return (
            <View style={WeatherStyle.container}>
                <Text style={WeatherStyle.item}> 城市: {item.city}</Text>
                <Text style={WeatherStyle.item}> 城市ID: {item.cityid}</Text>
                <Text style={WeatherStyle.item}> 温度: {item.temp}</Text>
                <Text style={WeatherStyle.item}> 风向: {item.WD}</Text>
                <Text style={WeatherStyle.item}> 风力: {item.WS}</Text>
            </View>
        );
    }

    fetchWeatherData() {
        //http和https不要乱用
        const url = 'http://www.weather.com.cn/data/sk/101010100.html';
        fetch(url,{method:'GET'})
            .then((response)=>response.json())
            .then(
                (responseJson)=>{
                    var weatherInfo = responseJson;
                    var info = weatherInfo.weatherinfo;
                    this.setState({
                        weather:info,
                    });
                }
            )
            .catch((error)=>console.error(error))
    }

    componentDidMount() {
        this.fetchWeatherData();
    }



}

const WeatherStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:"row",
            flexWrap:"wrap",
            alignContent:"center",
        },
        item:{
            width:Dimensions.get('window').width,
            height:30,
            color:"blue",
            textAlignVertical:"center",
            fontSize: 20,
        }
    }
)