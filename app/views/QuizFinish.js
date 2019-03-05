import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export class Finish extends Component {
    static navigationOptions = {
        header: null
    }

    exitQuiz=()=>{
        this.props.navigation.navigate('HomeRT')
    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No Score returned')
        let questionMissed = this.props.navigation.getParam('missed', 'Error - No missed questions')
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned')

        return (
            <View style={styles.container}>
                <Text>Your quiz score was {userScore}</Text>
                <Text>You missed on {questionMissed} out of {totalQuestions}</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Finish Quiz</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        'height': '10%' 
    }
})