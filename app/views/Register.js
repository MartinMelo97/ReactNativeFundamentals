import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage } from 'react-native'

export class Register extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            username: '',
            passwd: '',
            passwdConfirm: ''
        }
    }

    cancelRegister = () => {
        Alert.alert("Registration cancelled")
        this.props.navigation.navigate('HomeRT')
    }

    registerAccount = () => {
        if(!this.state.username) {
            Alert.alert('Please enter a username')
        }
        else if(this.state.passwd !== this.state.passwdConfirm) {
            Alert.alert('Passwords do not match')
        }
        else {
            AsyncStorage.getItem(this.state.username, (err, result)=> {
                if(result!==null){
                    Alert.alert(`${this.state.username} already exist`)
                }
                else {
                    AsyncStorage.setItem(this.state.username, this.state.passwd, (err, result)=> {
                        Alert.alert(`${this.state.username} account created`)
                        this.props.navigation.navigate('HomeRT')
                    })
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Register Account</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text)=> this.setState({username: text})}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Username</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text)=>this.setState({passwd: text})}
                    value={this.state.passwd}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Enter Password</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text)=>this.setState({passwdConfirm: text})}
                    value={this.state.passwdConfirm}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Confirm Password</Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Register
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: "80%",
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    labels: {
        paddingBottom: 10
    }

})