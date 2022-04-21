import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Colocar dentro desse Route as rotas que tiverem o MainLayout(Header e Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
