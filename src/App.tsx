import { ThemeProvider } from 'styled-components';
import Footer from './layouts/Footer';

import { AppRoutes } from './routes';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
