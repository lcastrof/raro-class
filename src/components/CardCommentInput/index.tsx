import { useState } from 'react';
import * as S from './styles';

import api from '../../services/api';
import { useAuth } from '../../store/auth';

type PropsCardCommentInput = {
  videoId: string;
};

export const CardCommentInput = ({ videoId }: PropsCardCommentInput) => {
  const [query, setQuery] = useState('');

  const { user } = useAuth();

  function SendComment() {
    api.post(`/videos/${videoId}/comentarios/`, {
      texto: query
    });
    setQuery('');
  }

  return (
    <S.Container>
      <S.UserCard>
        <S.Avatar src={user?.foto} alt="Foto do usuário" />;
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
