import { useState } from 'react';
import * as S from './styles';

import api from '../../services/api';

type PropsCardCommentInput = {
  videoId: string;
  avatar: string;
};

export const CardCommentInput = ({
  videoId,
  avatar
}: PropsCardCommentInput) => {
  const [query, setQuery] = useState('');

  function SendComment() {
    api.post(`/videos/${videoId}/comentarios/`, {
      texto: query
    });
    setQuery('');
  }

  return (
    <S.Container>
      <S.UserCard>
        <S.Avatar src={avatar} alt="Foto do usuário" />
        <S.Input
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          placeholder="Deixe um Comentário.."
        />
      </S.UserCard>
      <S.CardButton>
        {query === '' ? (
          <S.DefaultButton>Comentar</S.DefaultButton>
        ) : (
          <S.Button onClick={SendComment}>Comentar</S.Button>
        )}
      </S.CardButton>
    </S.Container>
  );
};
