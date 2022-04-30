import * as S from './styles';
import DivideLine from '../../components/DivideLine';
import { InfoVideoClass } from '../../components/InfoVideoClass';
import { CardLinkClass } from '../../components/CardLinkClass';
// import { CardVideo } from '../../components/CardVideo';
// import { CardContent } from '../../components/Skeleton/SkeletonVideosList/styles';

export const VideoClass = () => {
  return (
    <S.Container2>
      <S.Container>
        <S.ContainerLeft>
          <InfoVideoClass />
          <DivideLine />
          <p>Comentários do Alunos</p>
        </S.ContainerLeft>
        {/* O style _S.ContainerRightBackSupport_ é uma base para o stye _S.ContainerRight_ (logo abaixo no código).
      Por favor, não excluir o _S.ContainerRight_ porque ele ajuda no tamanho certinho que as divs entre
      elas precisam estar. Pois o <ReactPlayer /> engloba div com video.
      Por isso, quando for adicionar o componente da lista de vídeo aula, na div da lateral direita, colocar
      dentro do style _S.ContainerRight_ */}
      </S.Container>
      <S.ContainerRight>
        <S.TitleRecommended>Vídeos Recomendados</S.TitleRecommended>
        <CardLinkClass />
      </S.ContainerRight>
      {/* <S.ContainerRight>
        <CardLinkClass />
      </S.ContainerRight> */}
    </S.Container2>
  );
};
