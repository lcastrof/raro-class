import * as S from './styles';
import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';

type PropsLogin = {
  children: ReactNode;
  title: string;
  subTitle: string;
  linkparagrafo1: string;
  linkparagrafo2?: string;
  icon?: ReactElement<IconType>;
  iconRight?: ReactElement<IconType>;
};

export const MainTextLayout = ({
  children,
  title,
  subTitle,
  linkparagrafo1,
  linkparagrafo2,
  icon,
  iconRight
}: PropsLogin) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.ListInputs>{children}</S.ListInputs>
      <S.LinksParagrafo>
        <p>
          {icon}
          {linkparagrafo1}
        </p>
        <p>
          {iconRight}
          {linkparagrafo2}
        </p>
      </S.LinksParagrafo>
      <S.Footer>
        <S.FooterText1>Termos de Uso • Política de Privacidade</S.FooterText1>
        <S.FooterText2>© 2022 Raro Labs</S.FooterText2>
      </S.Footer>
    </>
  );
};
