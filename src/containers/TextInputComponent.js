import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


export  default class TextInputComponent extends Component{
    constructor(props){
        super(props)

    }
    state = {
        firstName: '',
        lastName: ''
    }
    handleFirstName = (text) => {
        this.setState({ firstName: text })
    }
    handleLastName = (text) => {
        this.setState({ lastName: text })
    }
    popup = (first, last) => {
        alert('First Name: ' + first + ' Last Name: ' + last)
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.form}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "First Name"
                           placeholderTextColor = "#bfbdb9"
                           autoCapitalize = "none"
                           onChangeText = {this.handleFirstName}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Last Name"
                           placeholderTextColor = "#bfbdb9"
                           autoCapitalize = "none"
                           onChangeText = {this.handleLastName}/>
                <Text style={styles.paragraph}>Full Name : {this.state.firstName} {this.state.lastName}</Text>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.popup(this.state.firstName, this.state.lastName)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        );
    }
}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#ff9f05',
        borderWidth: 1,
        width:270

    },
    submitButton: {
        backgroundColor: '#ff9f05',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius:15
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center'
    },
    paragraph: {
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    form: {

        justifyContent: 'space-between',
    },



});