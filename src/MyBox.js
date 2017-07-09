import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';

export class MyBox extends Component {
    render() {
        return (
            <View style={{backgroundColor:"#fff",padding:20,marginHorizontal:20,marginVertical:30,borderRadius:10}}>
                {this.props.children}
            </View>
        );
    }
}