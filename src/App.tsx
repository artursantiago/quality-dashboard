import { useState } from 'react';

import { Header, Navigation, PageLayoutContainer } from 'components';
import { Dashboard } from 'pages';

import { ThemeConfig } from 'theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = (): JSX.Element => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);

  return (
    <ThemeConfig>
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
      <PageLayoutContainer
        isNavigationCollapsed={isNavigationCollapsed}
      >
        <Dashboard />
      </PageLayoutContainer>
    </ThemeConfig>
  );
};

export default App;
