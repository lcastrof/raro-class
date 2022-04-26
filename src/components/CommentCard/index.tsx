import * as S from './styles';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

type CommentCardProps = {
  avatar: string;
  userName: string;
  userComment: string;
};

export const CommentCard = ({
  avatar,
  userName,
  userComment
}: CommentCardProps) => {
  return (
    <S.Container>
      <S.Avatar src={avatar} alt="imagem de perfil do usuário" />
      <S.Info>
        <S.UserName>{userName}</S.UserName>
        <S.Comment>{userComment}</S.Comment>
        <S.ReactComment>
          <p>{<AiOutlineLike size={20} />}</p>
          <p>{<AiOutlineDislike size={20} />}</p>
        </S.ReactComment>
      </S.Info>
    </S.Container>
  );
};
