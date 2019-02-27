import React, { Component } from 'react'
import { StyleSheet, Text, View,  Image } from 'react-native'

export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message
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