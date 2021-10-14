import { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { Header, Navigation } from 'components';
import { lightTheme } from 'styles/muiTheme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = (): JSX.Element => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <Navigation
        open={isNavigationOpen}
        setOpen={setIsNavigationOpen}
        isCollapsed={isNavigationCollapsed}
        setIsCollapsed={setIsNavigationCollapsed}
      />
      <Header
        setIsNavigationOpen={setIsNavigationOpen}
        isNavigationCollapsed={isNavigationCollapsed}
      />
    </ThemeProvider>
  );
};

export default App;
