import React, {Component} from 'react';
import {
    Image, StatusBar,
    View,Dimensions
} from 'react-native';

export class Background extends Component {
    render() {
        const wind = Dimensions.get("window");
        return (
            <View style={{position:"absolute",top:0,left:0}}>
                <StatusBar barStyle="light-content" />
                <Image source={require("./images/bg_image.jpg")} style={{width:wind.width,height:wind.height,position:"absolute",top:0,left:0}}/>
            </View>
        );
    }
}