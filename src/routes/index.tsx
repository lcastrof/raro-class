import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Colocar dentro desse Route as rotas que tiverem o MainLayout(Header e Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
