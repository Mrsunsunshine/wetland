import React from 'react';
import {AppRegistry} from 'react-native';
//import  Hello from  './00_Hello/HelloRN';
//import  Prop from './00_Hello/Props';
//import   State from './00_Hello/State';
//import  FlexTest from './01_Flex/FlexTest';
import  FetchWeather from './02_Fetch/FetchWeather';




//wetland 需要是自己项目的名称(package.json里)
//AppRegistry.registerComponent('wetland',()=>Hello);
//AppRegistry.registerComponent('wetland',()=>Prop);
//AppRegistry.registerComponent('wetland',()=>State);
AppRegistry.registerComponent('wetland',()=>FetchWeather);