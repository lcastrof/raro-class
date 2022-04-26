import * as S from './styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

type RowTitleProps = {
  title: string;
  type?: 'class' | 'favorite';
  level?: 1 | 2;
  withHideButton?: boolean;
  sliderHideOrShow?: boolean;
  setSliderHideOrShow?: (value: boolean) => void;
  noneVideoFavorite?: boolean;
  setNoneVideoFavorite?: (value: boolean) => void;
  loadingVideoFavorite?: boolean;
  setLoadingVideoFavorite?: (value: boolean) => void;
};

export const RowTitle: React.FC<RowTitleProps> = ({
  title,
  type = 'class',
  level = 2,
  withHideButton,
  sliderHideOrShow,
  setSliderHideOrShow,
  noneVideoFavorite,
  setNoneVideoFavorite,
  loadingVideoFavorite,
  setLoadingVideoFavorite
}) => {
  const iconSrc =
    type === 'class'
      ? '/assets/art/artIcon-logoHatRaroAcademy.svg'
      : '/assets/art/artIcon-starPreenchida.svg';

  const [buttonHideOrShow, setButtonHideOrShow] = useState(true);
  // const [effectRowTitle, setEffectRowTitle] = useState(true);

  const clickHideorShow = () => {
    setButtonHideOrShow(!buttonHideOrShow);
    setSliderHideOrShow!(!sliderHideOrShow)!;
    setNoneVideoFavorite!(!noneVideoFavorite);
    setLoadingVideoFavorite!(!loadingVideoFavorite);
    // setEffectRowTitle(effectRowTitle);
    console.log(noneVideoFavorite, 'noneVideoFavorite');
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Icon src={iconSrc} type={type} />
        <S.Title as={level === 1 ? 'h1' : 'h2'}>{title}</S.Title>
      </S.TitleWrapper>
      <S.WrapButtonShowOrHide>
        {withHideButton && (
          <S.ButtonShowOrHide type="button" onClick={clickHideorShow}>
            {buttonHideOrShow ? (
              <>
                Esconder
                <MdKeyboardArrowUp size={25} />
              </>
            ) : (
              <>
                Mostrar
                <MdKeyboardArrowDown size={25} />
              </>
            )}
          </S.ButtonShowOrHide>
        )}
      </S.WrapButtonShowOrHide>
    </S.Container>
  );
};
