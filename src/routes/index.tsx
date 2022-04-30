import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Cadastro } from '../pages/Cadastro';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import NotFound from '../pages/NotFound';
import { NovaSenha } from '../pages/NovaSenha';
import { RecuperarSenha } from '../pages/RecuperarSenha';
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
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/novasenha" element={<NovaSenha />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
