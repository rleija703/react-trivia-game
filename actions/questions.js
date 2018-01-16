import fetch from 'isomorphic-fetch'

/**
 * Get questions
 *
 * Retrieves 10 true false questions from Opentdb.
 */
export const getQuestions = (dispatch) => () => {

  // notify app we're fetching questions
  dispatch({type: 'FETCH_QUESTIONS'})

  fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(res => {
      if (res.status !== 200) return dispatch()

      return res.json()
    })
    .then(questions => dispatch({type: 'ADD_QUESTIONS', payload: {questions: questions.results}}))
}