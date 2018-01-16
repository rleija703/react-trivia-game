import React from 'react'
import injectSheet from 'react-jss'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store'
import withRoot from '../components/withRoot'

// Actions
import {getQuestions} from '../actions/questions'

// Components
import WelcomeScreen from '../components/WelcomeScreen'
import QuizScreen from '../components/QuizScreen'
import ResultScreen from '../components/ResultScreen'

class FrontPage extends React.Component {

  handleSubmit(passed) {
    this.props.dispatch({type: 'SUBMIT_ANWSER', payload: {passed}})
  }

  handleBeginClick() {
    this.props.dispatch({type: 'START_GAME'})
  }

  handleGameReset() {
    this.props.dispatch({type: 'RESET_GAME'})
  }

  componentDidMount() {
    const {questions, getQuestions} = this.props
    if (questions.state === 'FROZEN') getQuestions()
  }

  render() {
    const {game, questions} = this.props
    console.log(game)
    if (game.state === 'PLAY' && game.currentQuestion < 10 && questions.items.length) {
      return <QuizScreen
        handleSubmit={this.handleSubmit.bind(this)}
        question={questions.items[game.currentQuestion]}/>
    } else if (game.state === 'PLAY' && game.currentQuestion > 9) {
      return <ResultScreen onClick={this.handleGameReset.bind(this)} {...game} {...questions} />
    }

    return <WelcomeScreen onClick={this.handleBeginClick.bind(this)} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getQuestions: getQuestions(dispatch)
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withRoot()(FrontPage))