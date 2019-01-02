import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogoComponent from "./LogoComponent";

export  default class TopNavBarComponent extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <View style={styles.topNavBarComponent}>
                <LogoComponent/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    topNavBarComponent:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#1769ed',
        elevation: 10,
        alignItems:"center",
        shadowColor: '#000000'

    },
});