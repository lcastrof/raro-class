import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import * as S from './styles';

type ButtonProps = {
  placeHolder: string;
  icon?: ReactElement<IconType>;
  iconRight?: ReactElement<IconType>;
  type?: string;
};

export const Input = ({ placeHolder, icon, iconRight, type }: ButtonProps) => {
  return (
    <S.Container className="input-container">
      {icon}
      <S.Input placeholder={placeHolder} type={type} />
      {iconRight}
    </S.Container>
  );
};
