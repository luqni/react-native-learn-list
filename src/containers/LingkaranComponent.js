import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export  default class LingkaranComponent extends Component{
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
        width:40,
        height:40,


        backgroundColor:'#ffffff',

    },
});