import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'

export class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Header message="Press to Login" />
                <Hero />
                <Text style={{flex:6}}>Mobile Apps Developlment</Text>
                {/*<Text>Testing React Native</Text>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row'
    }
})