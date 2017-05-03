import React, {Component} from  'react';
import {StyleSheet, View, Text} from  'react-native';

export  default  class FlexTest extends Component {
    render() {
        return(
            <View style={FlexTestStyle.container}>
                <Text style={FlexTestStyle.item}>A</Text>
                <Text style={FlexTestStyle.item}>B</Text>
                <Text style={FlexTestStyle.item}>C</Text>
                <Text style={FlexTestStyle.item}>D</Text>
                <Text style={FlexTestStyle.item}>E</Text>
                <Text style={FlexTestStyle.item}>F</Text>
                <Text style={FlexTestStyle.item}>G</Text>
            </View>
        );
    }
}
const FlexTestStyle = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignContent: "center",
    },
    item: {
        backgroundColor: "grey",
        color:"blue",
        textAlign: "center",
        textAlignVertical:"center",
        fontSize: 20,
        width:50,
        height:50,
        margin:10,
        borderRadius:25,
    }
    }
)