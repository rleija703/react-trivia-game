import React from 'react'
import PropTypes from 'prop-types'

class QuizScreen extends React.Component {

  htmlDecode(str){
    var e = document.createElement('div');
    e.innerHTML = str;
    // handle case of empty str
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  onClick(val, answer) {
    this.props.handleSubmit(val === answer)
  }

  render() {
    const {question} = this.props
    return(
      <div>
        <h1>{question.category}</h1>
        <h4>{this.htmlDecode(question.question)}</h4>
        <button
          onClick={e => this.onClick(e.currentTarget.dataset.val, question.correct_answer)}
          data-val="True"
          >true</button>
        <button
          onClick={e => this.onClick(e.currentTarget.dataset.val, question.correct_answer)}
          data-val="False">false</button>
      </div>
    )
  }
}

QuizScreen.propTypes = {
  question: PropTypes.object
}

export default QuizScreen