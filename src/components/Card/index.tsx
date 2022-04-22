import * as S from './styles';
import { BsStar } from 'react-icons/bs';
import { VideoThumbnailProps } from '../VideoThumbnailProps/VideoThumbnail.Types';

export const CardVideo: React.FC<VideoThumbnailProps> = ({
  //id,
  nome,
  //url,
  thumbUrl
  //descricao,
  //createdAt,
  //duracao,
  //dataPublicacao,
  //topico,
  //tags
}) => {
  return (
    <S.Container>
      <S.VideoField>
        <img src={thumbUrl} alt={nome} />
        <S.Star>
          <BsStar size={25} />
        </S.Star>
      </S.VideoField>
      <S.Title>{nome}</S.Title>
    </S.Container>
  );
};
