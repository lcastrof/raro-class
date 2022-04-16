import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home title="Hello World" />} />
    </BrowserRouter>
  );
};
