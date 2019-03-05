import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import { QuizData }  from '../data/QuizQuestions'
import { Question } from '../sections/Question'

export class Quiz extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            questLoaded: false,
            totalScore: 100,
            completedQuiz: false
        }
    }

    componentDidMount(){
        let numQuestions = Array.from(QuizData.questions).length
        this.setState({
            questList: QuizData.questions,
            questLoaded: true,
            numberOfQuestions: numQuestions,
            incorrect: 0,
            questionAnswered: 0
        })
    }

    updateScore = (penalty) => {
        let tempScore = this.state.totalScore
        let missed = this.state.incorrect
        let questionsTotal = this.state.numberOfQuestions
        let questionsDone = this.state.questionAnswered

        let newScore = tempScore - penalty
        let totalAnswered = questionsDone + 1
        let totalMissed = penalty ? missed + 1 : nissed

        this.setState({
            totalScore: newScore,
            incorrect: totalMissed,
            questionAnswered: totalAnswered
        })

        if(totalAnswered === questionsTotal) {
            this.setState({
                completedQuiz: true
            })
        }
    }

    finishQuiz=()=>{
        this.props.navigation.navigate(
            'FinishRT', {
                score: this.state.totalScore,
                missed: this.state.incorrect,
                questions: this.state.numQuestions
            }
        )
    }
}