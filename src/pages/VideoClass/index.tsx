import * as S from './styles';
import DivideLine from '../../components/DivideLine';
import { InfoVideoClass } from '../../components/InfoVideoClass';
import { CardLinkClass } from '../../components/CardLinkClass';

export const VideoClass = () => {
  return (
    <S.Container2>
      <S.Container>
        <S.ContainerLeft>
          <InfoVideoClass />
          <DivideLine />
        </S.ContainerLeft>
      </S.Container>
      <S.ContainerRight>
        <S.TitleRecommended>Vídeos Recomendados</S.TitleRecommended>
        <CardLinkClass />
      </S.ContainerRight>
    </S.Container2>
  );
};
