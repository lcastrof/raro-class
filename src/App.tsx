import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home title="Hello world" />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
