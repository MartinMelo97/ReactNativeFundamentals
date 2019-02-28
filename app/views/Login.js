import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage } from 'react-native'

export class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            username: '',
            passwd: ''
        }
    }

    cancelLogin = () => {
        Alert.alert("Login cancelled")
        this.props.navigation.navigate("HomeRT")
    }

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert("Please enter a username")
        }
        else if(!this.state.passwd) {
            Alert.alert("Please enter a password")
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if(result !== 'none') {
                    Alert.alert('Someone already logged on')
                    this.props.navigation.navigate('HomeRT')
                }
                else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if(result!==null){
                            if(result!==this.state.passwd){
                                Alert.alert('Password incorrect')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result)=> {
                                    Alert.alert(`${this.state.username} Logged in`)
                                    this.props.navigation.navigate('HomeRT')
                                })
                            }
                        }
                        else {
                            Alert.alert(`No account for ${this.state.username}`)
                        }
                    })
                }
            })
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>

            <TextInput 
                style={styles.inputs}
                onChangeText={(text)=>this.setState({username: text})}
                value={this.state.username}
            />
            <Text style={styles.labels}>Enter Username</Text>

            <TextInput 
                style={styles.inputs}
                onChangeText={(text)=>this.setState({passwd: text})}
                value={this.state.passwd}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Enter Password</Text>

            <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                <Text style={styles.buttons}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                <Text style={styles.buttons}>Cancel</Text>
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
        paddingBottom: 10,
        color: '#f2f2f2'
    }

})