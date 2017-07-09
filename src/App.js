/**
 * Created by admin on 09/07/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions, TouchableOpacity, Image, StatusBar, ScrollView
} from 'react-native';
import {Background} from "./Background";
import {MyBox} from "./MyBox";

export default class FirstProjectOne extends Component {

    state = {
        myText : "Hello World"
    };

    render() {
        const myStyle = {flex:1};




       return (
           <View style={myStyle}>
               <Background/>
               <ScrollView>
                   <TouchableOpacity style={{marginTop:20}} onPress={() => {
                       this.setState({
                           myText:"New Text"
                       });
                   }}>
                       <Text style={{color:"#fff",backgroundColor:"rgba(0,0,0,0)"}}>{this.state.myText}</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                       <Image source={require('./images/logo.png')} style={{width:100,height:100}} />
                   </TouchableOpacity>

                   <MyBox>
                       <Text>True when the user was able to see the notification. False when app is in focus and in-app alerts are disabled, or the remote notification is silent.</Text>
                       <Text>True when the user was able to see the notification. False when app is in focus and in-app alerts are disabled, or the remote notification is silent.</Text>
                   </MyBox>
               </ScrollView>
           </View>
       )
    }
}