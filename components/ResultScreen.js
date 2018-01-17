import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

const styles = {
  container: {
    height: 'auto'
  }
}

class ResultScreen extends React.Component {

  state = {
    expanded: null
  }

  htmlDecode(str){
    var e = document.createElement('div');
    e.innerHTML = str;
    // handle case of empty str
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  handleClick() {
    this.props.onClick()
  }

  handleExpand = panelId => (event, expanded) => {
    this.setState({expanded: panelId})
  }

  render() {
    const {correctQuestionIds, items, classes} = this.props

    return(
        <Grid className={`main-paper ${classes.container}`} container spacing={0}>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Paper>
              <Typography type="headline">You scored</Typography>
              <Typography type="headline">{correctQuestionIds.length} / {items.length}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {items.map((question, i) => {
                return (
                  <ExpansionPanel
                    key={i}
                    expanded={this.state.expanded === i}
                    onClick={this.handleExpand(i)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography type="body2">{this.htmlDecode(question.question)}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography type="body1">
                        {correctQuestionIds.includes(i) ? 
                          `You chose the correct answer: ${question.correct_answer.toLowerCase()}` : 
                          `You chose an incorrect answer ${question.incorrect_answers[0].toLowerCase()}. The correct answer is ${question.correct_answer.toLowerCase()}`}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )
            })}
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Button
                fullWidth
                onClick={this.handleClick.bind(this)}>
                Play again?
              </Button>
            </Paper>
          </Grid>
        </Grid>
    )
  }
}
export default withStyles(styles, {withStyles: true})(ResultScreen)