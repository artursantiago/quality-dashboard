import { Navigation } from 'components';

import { ThemeProvider } from '@material-ui/styles';
import { lightTheme } from 'styles/muiTheme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = (): JSX.Element => (
  <ThemeProvider theme={lightTheme}>
    <Navigation />
  </ThemeProvider>
);

export default App;
