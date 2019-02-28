import React, { Component } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Alert, Image } from 'react-native'

export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        }
    }

    toggleUser = () => {
        if(this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result)=> {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                })
                Alert.alert('User logged out')
            })
        }
        else {
            this.props.navigate('LoginRT')
        }
    }

    componentDidMount = () => {
        AsyncStorage.getItem('userLoggedIn', (err,result)=> {
            if(result==='none') {
                console.log("NONE")
            }
            else if(result === null){
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result)=> {
                    console.log("Set user to NONE")
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message
        return (
            <View style={styles.headStyle}>
            <Image 
                style={styles.logoStyle}
                source={require('./img/pexels1.jpeg')}
            />
                <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35606a',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle:{
        flex:1,
        width: undefined,
        height: undefined
    }
})