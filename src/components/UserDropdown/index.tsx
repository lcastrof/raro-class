import { useAuth } from '../../store';
import * as S from './styles';

export const UserDropdown = () => {
  const { user, logout } = useAuth();

  return (
    <S.Container>
      <S.UserPicture src={user?.foto} alt={`Foto de ${user?.nome}`} />
      <S.UserInfo>
        <S.UserName>{user?.nome}</S.UserName>
        <S.UserEmail>{user?.email}</S.UserEmail>
      </S.UserInfo>
      <S.ActionsMenu>
        <S.ActionItem onClick={logout}>Logout</S.ActionItem>
      </S.ActionsMenu>
    </S.Container>
  );
};
