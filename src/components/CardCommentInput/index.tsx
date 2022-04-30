import { useState } from 'react';
import * as S from './styles';

export const CardCommentInput = () => {
  const [input, setInput] = useState(true);

  function mudarBotao() {
    setInput(false);
  }

  return (
    <S.Container>
      <S.Container2>
        <S.Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU"
          alt="Foto do usuário"
        />
        <S.Input onClick={mudarBotao} />
      </S.Container2>
      <S.Buttons>
        {input ? (
          <>
            <S.DefaultButton>Cancelar</S.DefaultButton>
            <S.DefaultButton>Comentar</S.DefaultButton>
          </>
        ) : (
          <>
            <S.Button2>Cancelar</S.Button2>
            <S.Button>Comentar</S.Button>
          </>
        )}
      </S.Buttons>
    </S.Container>
  );
};
