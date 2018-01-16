import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// Reducers
import {fetchTriviaQuestions, addTriviaQuestions} from './reducers/questions'
import {startGame, submitAnwser, resetGame} from './reducers/game'

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// Reducers for question
const questionReducers = createReducer({items: [], state: 'FROZEN'}, {
  'FETCH_QUESTIONS': fetchTriviaQuestions,
  'ADD_QUESTIONS': addTriviaQuestions
})

// Reducers for game
const gameReducers = createReducer({state: 'FROZEN', correctQuestionIds: [], currentQuestion: 0}, {
  'START_GAME': startGame,
  'SUBMIT_ANWSER': submitAnwser,
  'RESET_GAME': resetGame
})

// Combines all reducers together
const rootReducer = combineReducers({
  questions: questionReducers,
  game: gameReducers
})

const makeStore = initialState => createStore(rootReducer, initialState ={}, applyMiddleware(thunk))

export default makeStore