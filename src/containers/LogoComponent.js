import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export  default class LogoComponent extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <View style={styles.contentComponent}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    contentComponent:{


        borderRadius:100,
        width:100,
        height:100,


        backgroundColor:'#fbfbff',

    },
});