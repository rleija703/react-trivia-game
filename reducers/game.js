/**
 * Starts the game
 */
export function startGame(state, action) {
  return {
    ...state,
    state: 'PLAY'
  }
}

/**
 * Submit an awnser
 * 
 * Handles current question to display and the holding
 * a list of questions ids that were anwsered correctly.
 */
export function submitAnwser(state, action) {
  const {passed} = action.payload
  const {currentQuestion, correctQuestionIds} = state
  const listOfCorrectAnwsers = correctQuestionIds.slice(0)

  if (passed) listOfCorrectAnwsers.push(currentQuestion)

  return {
    ...state,
    currentQuestion: currentQuestion + 1,
    correctQuestionIds: listOfCorrectAnwsers
  }
}

/**
 * Reset game
 */
export function resetGame() {
  return {
    state: 'RESET_GAME',
    correctQuestionIds: [],
    currentQuestion: 0
  }
}