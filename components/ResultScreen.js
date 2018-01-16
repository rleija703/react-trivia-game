import React from 'react'

class ResultScreen extends React.Component {

  htmlDecode(str){
    var e = document.createElement('div');
    e.innerHTML = str;
    // handle case of empty str
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    const {correctQuestionIds, items} = this.props
    return(
      <div>
        <h1>You scored</h1>
        <h1>{correctQuestionIds.length} / {items.length}</h1>
        <div>
          {items.map((question, i) => {
            return (
              <div>
                <h3>{this.htmlDecode(question.question)}</h3>
              </div>
            )
          })}
        </div>
        <button onClick={this.handleClick.bind(this)}>Play again?</button>
      </div>
    )
  }
}
export default ResultScreen