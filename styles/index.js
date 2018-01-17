import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { pink, grey } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    type:'light',
    // primary: {
    //   ...grey,
    //   '500': '#303030'
    // },
    // secondary: {
    //   ...pink,
    //   '500': '#e91e63'
    // }
  },
});

// Configure JSS
const jss = create(preset());

function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  };
}

export default function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}