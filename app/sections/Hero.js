import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

export class Hero extends Component {
    render(){
        return (
            <Image 
                style={styles.heroImage}
                source={ require('./img/pexels2.jpeg')}
            />
        )
    }
}

const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
})