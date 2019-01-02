import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LingkaranComponent from "./LingkaranComponent";
import TextInputComponent from "./TextInputComponent";

export  default class TopNavBarComponent extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <View style={styles.logo}>
                <LingkaranComponent/>

                <TextInputComponent/>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo:{

        alignItems:'center',
        borderRadius:20,
        backgroundColor:'#ffffff',
        paddingTop:12,
        paddingBottom: 12,
        paddingLeft: 5,
        elevation: 10,
        shadowColor: '#000000'

    },
});