import * as S from './styles';

type PageMainProps = {
  children: React.ReactNode;
};

export const PageMain = ({ children }: PageMainProps) => {
  return (
    <S.Page>
      <S.SideLeft>
        <img
          src="/assets/art/peopleWorkingWithLogo.png"
          alt="Imagem da Raro academy"
        />
      </S.SideLeft>
      <S.SideRight>
        <S.MainContent>{children}</S.MainContent>
      </S.SideRight>
    </S.Page>
  );
};
