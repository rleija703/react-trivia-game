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

const styles = {}

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
      <Paper className={`main-paper`}>
        <Grid
          container
          style={{height: '100%'}}
          justify='space-between'>
          <Grid item xs={12}>
            <Typography type="headline">You scored</Typography>
            <Typography type="headline">{correctQuestionIds.length} / {items.length}</Typography>
          </Grid>
          <Grid item xs={12}>
            {items.map((question, i) => {
                return (
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography type="title">{this.htmlDecode(question.question)}</Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                )
            })}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={this.handleClick.bind(this)}>
              Play again?
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
export default withStyles(styles)(ResultScreen)