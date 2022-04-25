import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
