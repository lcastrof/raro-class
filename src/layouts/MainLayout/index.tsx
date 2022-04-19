import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MainContent } from './styles';

export const MainLayout = () => (
  <>
    <Header />
    <MainContent>
      <Outlet />
    </MainContent>
  </>
);
