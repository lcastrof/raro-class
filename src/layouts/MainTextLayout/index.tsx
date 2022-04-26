import * as S from './styles';
import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type PropsLogin = {
  children: ReactNode;
  title: string;
  subTitle?: string;
  linkparagrafo1: {
    url: string;
    text: string;
  };
  linkparagrafo2?: {
    url: string;
    text: string;
  };
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
        <Link to={linkparagrafo1.url}>
          {icon}
          {linkparagrafo1.text}
        </Link>
        {linkparagrafo2 && (
          <Link to={linkparagrafo2?.url as string}>
            {linkparagrafo2?.text}
            {iconRight}
          </Link>
        )}
      </S.LinksParagrafo>
      <S.Footer>
        <S.FooterText1>Termos de Uso • Política de Privacidade</S.FooterText1>
        <S.FooterText2>© 2022 Raro Labs</S.FooterText2>
      </S.Footer>
    </>
  );
};
