/**
 * Informs the applications the questions are being fetched.
 */
export function fetchTriviaQuestions(state, action) {
  return {
    ...state,
    state: 'FETCHING'
  }
}

/**
 * Adds trivia questions to app state.
 */
export function addTriviaQuestions(state, action) {
  const {questions} = action.payload
  const questionListClone = state.items.slice(0)

  return {
    state: 'READY',
    items: questionListClone.concat(questions)
  }
}