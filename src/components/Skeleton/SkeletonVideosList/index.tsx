import * as S from './styles';

export const SkeletonVideosList = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.TitleList />
      </S.Header>
      <S.Main>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
        </S.CardContent>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
        </S.CardContent>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
        </S.CardContent>
      </S.Main>
    </S.Container>
  );
};
