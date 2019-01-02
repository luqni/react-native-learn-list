import React, { Component } from 'react';
import {ScrollView,View, Text, StyleSheet, FlatList} from 'react-native';

export  default class ContentComponent extends Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <View style={styles.contentComponent}>

                <FlatList
                    data={[
                        {key: 'arip'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        {key: 'luqni'},
                        ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    keyExtractor={(x, index) => index}
                />

            </View>
        );
    }

}
const styles = StyleSheet.create({
    contentComponent:{
        flex:9,
        backgroundColor:'#fff',


    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'


    }
});