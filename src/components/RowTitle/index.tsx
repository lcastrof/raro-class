import * as S from './styles';

type RowTitleProps = {
  title: string;
  type?: 'class' | 'favorite';
  level?: 1 | 2;
};

export const RowTitle: React.FC<RowTitleProps> = ({
  title,
  type = 'class',
  level = 2
}) => {
  const iconSrc =
    type === 'class'
      ? '/assets/art/artIcon-logoHatRaroAcademy.svg'
      : '/assets/art/artIcon-starPreenchida.svg';
  return (
    <S.Container>
      <S.Icon src={iconSrc} type={type} />
      <S.Title as={level === 1 ? 'h1' : 'h2'}>{title}</S.Title>
    </S.Container>
  );
};
