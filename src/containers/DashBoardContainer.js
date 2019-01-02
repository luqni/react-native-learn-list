import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopNavBarComponent from "./TopNavBarComponent";
import ContentComponent from "./ContentComponent";

export  default class DashBoardContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                username : "Luqni"
            },
            wallet : {
                balance:1000000,
                currency : "IDR"

            }
        }

    }
    render() {
        return(
            <View style={styles.dashboardContainer}>
                <TopNavBarComponent/>
                {/*<Text>{this.state.wallet.balance}</Text>*/}
                <ContentComponent/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    dashboardContainer:{
        flex:1,
        backgroundColor:'#1769ed',

    },
});