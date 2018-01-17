import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

class WelcomeScreen extends React.Component {

  handleClick() {
    this.props.onClick()
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
        <button onClick={this.handleClick.bind(this)}>Begin</button>
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default WelcomeScreen