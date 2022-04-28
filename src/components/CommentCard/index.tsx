import * as S from './styles';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike
} from 'react-icons/ai';

import api from '../../services/api';
import { useState } from 'react';

type CommentCardProps = {
  avatar: string;
  userName: string;
  userComment: string;
  upVotes: number;
  downVotes: number;
};

export const CommentCard = ({
  avatar,
  userName,
  userComment,
  upVotes,
  downVotes
}: CommentCardProps) => {
  const [iconUp, setIconUp] = useState(false);
  const [iconDown, setIconDown] = useState(false);
  /* const iconUpUpdated = !iconUp; */

  function handleLike() {
    if (iconDown) {
      setIconDown(false);
      api.delete(
        '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes'
      );
    }
    {
      !iconUp ? setIconUp(true) : setIconUp(false);
    }
  }
  {
    !iconDown && iconUp
      ? api.put(
          '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes',
          { vote: 'up' }
        )
      : api.delete(
          '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes'
        );
  }

  async function handleDislike() {
    if (iconUp) {
      setIconUp(false);
      api.delete(
        '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes'
      );
    }
    {
      !iconDown ? setIconDown(true) : setIconDown(false);
    }
  }
  {
    !iconUp && iconDown
      ? api.put(
          '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes',
          { vote: 'down' }
        )
      : api.delete(
          '/videos/25526467-e9d7-40cb-bc60-76bb85419915/comentarios/658c8aaf-ba11-4fdb-8fe9-fdf299db34d3/votes'
        );
  }

  return (
    <S.Container>
      <S.Avatar src={avatar} alt="imagem de perfil do usuário" />
      <S.Info>
        <S.UserName>{userName}</S.UserName>
        <S.Comment>{userComment}</S.Comment>
        <S.ReactComment>
          <p onClick={handleLike}>
            {iconUp ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
            {upVotes}
          </p>
          <p onClick={handleDislike}>
            {iconDown ? (
              <AiFillDislike size={20} />
            ) : (
              <AiOutlineDislike size={20} />
            )}
            {downVotes}
          </p>
        </S.ReactComment>
      </S.Info>
    </S.Container>
  );
};
