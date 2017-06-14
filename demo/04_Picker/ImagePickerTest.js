/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform
} from 'react-native';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
export default class ImagePickerTest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.openMycamera()}>
                    <Text style={styles.welcome}>
                        相机&相册
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    openMycamera = () =>{
        ImagePicker.showImagePicker(photoOptions,(response) =>{
            console.log('response'+response);
            if (response.didCancel){
                return
            }else if(response.error) {
                console.log('ImagePicker Error: ', response.error);
            }else{
                let source;

                /*if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true}
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true}
                }*/
                this.uploadImage(response.uri);
            }

        })
    }
    uploadImage(imageuri){
        let formData = new FormData();
        let file = {uri: imageuri,type:'multipart/form-data',name:'image.png'};
        formData.append('files',file);
        fetch('http://10.130.7.191:8080/gxbrc/files/uploadPic',{
            method:'POST',
            headers:{
                'Content-Type':'multipart/form-data',
            },
            body:formData,
        })
            .then((response)=>response.json())
            .then((responseData)=>{
                alert(responseData.error);
                console.log('responseData--',responseData);
            })
            .catch((error)=>{console.error('error',error)});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

