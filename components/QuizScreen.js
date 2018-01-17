import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

const styles = {
  column: {
    textAlign: 'center',
    maxWidth: '90%',
    margin: 'auto'
  },
}

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
    const {question, classes} = this.props
    return(
      <Paper className={`main-paper`}>
        <Grid
          container
          style={{height: '100%'}}
          justify='space-between'>
          <Grid item xs={12} className={classes.column}>
            <Typography type="headline">{question.category}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <Typography type="title">{this.htmlDecode(question.question)}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <Button
              style={{float: 'left'}}
              onClick={e => this.onClick(e.currentTarget.dataset.val, question.correct_answer)}
              data-val="True">
              True
            </Button>
            <Button
              style={{float: 'right'}}
              onClick={e => this.onClick(e.currentTarget.dataset.val, question.correct_answer)}
              data-val="False">
              False
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

QuizScreen.propTypes = {
  question: PropTypes.object
}

export default withStyles(styles)(QuizScreen)