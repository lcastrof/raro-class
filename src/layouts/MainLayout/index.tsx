import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import * as S from './styles';

export const MainLayout = () => (
  <>
    <Header />
    <S.MainContent>
      <Outlet />
    </S.MainContent>
  </>
);
