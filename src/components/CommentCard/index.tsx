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
  userComment: string[];
  upVotes: number;
  downVotes: number;
  video: string;
  commentId: string;
};

export const CommentCard = ({
  avatar,
  userName,
  userComment,
  upVotes,
  downVotes,
  video,
  commentId
}: CommentCardProps) => {
  const [iconUp, setIconUp] = useState(false);
  const [iconDown, setIconDown] = useState(false);

  function handleLike() {
    if (iconDown) {
      setIconDown(false);
      api.delete(`/videos/${video}/comentarios/${commentId}/votes`);
    }
    {
      !iconUp ? setIconUp(true) : setIconUp(false);
    }
  }
  {
    !iconDown && iconUp
      ? api.put(`/videos/${video}/comentarios/${commentId}/votes`, {
          vote: 'up'
        })
      : api.delete(`/videos/${video}/comentarios/${commentId}/votes`);
  }

  async function handleDislike() {
    if (iconUp) {
      setIconUp(false);
      api.delete(`/videos/${video}/comentarios/${commentId}/votes`);
    }
    {
      !iconDown ? setIconDown(true) : setIconDown(false);
    }
  }
  {
    !iconUp && iconDown
      ? api.put(`/videos/${video}/comentarios/${commentId}/votes`, {
          vote: 'down'
        })
      : api.delete(`/videos/${video}/comentarios/${commentId}/votes`);
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
