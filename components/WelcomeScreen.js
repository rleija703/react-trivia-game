import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

const styles = {
  column: {
    maxWidth: 230,
    margin: 'auto',
    textAlign: 'center'
  }
}

class WelcomeScreen extends React.Component {

  state = {
    welcomeText: 'Welcome to the Trivia Challenge!',
    rules: 'You will be presented with 10 True or False questions.',
    tease: 'Can you score 100%?'
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    const {classes} = this.props
    return (
      <Paper className={`main-paper`}>
        <Grid
          container
          style={{height: '100%'}}
          justify='space-between'>
          <Grid item xs={12} className={classes.column}>
            <Typography type="headline">{this.state.welcomeText}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <Typography type="title">{this.state.rules}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <Typography type="title">{this.state.tease}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <Button fullWidth onClick={this.handleClick.bind(this)} color="primary">
              Begin
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

WelcomeScreen.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(WelcomeScreen)