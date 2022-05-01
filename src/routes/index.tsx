import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import NotFound from '../pages/NotFound';
import { NewPassword } from '../pages/NewPassword';
import { RecoverPassword } from '../pages/RecoverPassword';
import { VideoClass } from '../pages/VideoClass';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Colocar dentro desse Route as rotas que tiverem o MainLayout(Header e Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoClass />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/novasenha" element={<NewPassword />} />
        <Route path="/recuperarsenha" element={<RecoverPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
