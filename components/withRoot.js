import React from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import wrapDisplayName from 'recompose/wrapDisplayName'
import getContext from '../styles'

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      height: '100%'
    },
    body: {
      margin: 0,
      height: '100%',
      '& > div' : {
        height: '100%'
      }
    },
    '#__next': {
      height: '100%',
      '& > div' : {
        height: '100%'
      }
    },
    '.main-paper': {
      width: '90%',
      height: 660,
      maxWidth: 375,
      margin: '60px auto',
    }
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

function withRoot(Component) {
  class WithRoot extends React.Component {
    static getInitialProps(ctx) {
      if (Component.getInitialProps) {
        return Component.getInitialProps(ctx);
      }

      return {};
    }

    componentWillMount() {
      this.styleContext = getContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const {theme, sheetsManager} = this.styleContext
      return (
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <AppWrapper>
            <Component {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
      );
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(Component, 'withRoot');
  }

  return WithRoot;
}

export default withRoot
