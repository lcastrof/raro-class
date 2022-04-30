import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../store/auth';
import * as S from './styles';
import ReactPlayer from 'react-player';
import { SkeletonPlayerVideo } from '../Skeleton/SkeletonPlayerVideo';
import { BsStar } from 'react-icons/bs';

export type InfoVideoClass = {
  id: string;
  nome: string;
  url: string;
  thumbUrl: string;
  descricao: string;
  duracao: string;
  dataPublicacao?: string | null;
  topico: string;
  tags: string[];
  createdAt: string;
};

export const InfoVideoClass = () => {
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(true);

  const [videoUrl, setVideoUrl] = useState();
  const [videoThumbnail, setVideoThumbnail] = useState();
  const [videoApi, setVideoApi] = useState<InfoVideoClass>();

  useEffect(() => {
    async function loadVideo() {
      const response = await api.get(
        `/videos/25526467-e9d7-40cb-bc60-76bb85419915`
      );
      setVideoUrl(response.data.url);
      setVideoThumbnail(response.data.thumbUrl);
      setVideoApi(response.data);
      setLoading(false);
    }

    loadVideo();
  }, [isAuthenticated]);

  if (loading) {
    return (
      <S.Container>
        <SkeletonPlayerVideo />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <ReactPlayer
        className={'react-player'}
        url={videoUrl}
        light={videoThumbnail}
        // width="74vw"
        width="100%"
        height="auto"
        controls={true}
        playing={true}
        playIcon={
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'rgb(0, 0, 0, 0.5)',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center'
            }}
          >
            <button style={{ background: 'transparent', border: 'none' }}>
              <img src={'/assets/icon/icon-playVideo.svg'} alt="Play vídeo" />
            </button>
          </div>
        }
      />
      <S.WrapInfo>
        <S.Star>
          {/* <S.StarButton onClick={handleFavorite} isFavorited={isFavorited}> */}
          <S.StarButton>
            {/* {isLoading ? ( */}
            {/* <Spinner size={25} /> */}
            {/* ) : isFavorited ? ( */}
            {/* <BsStarFill size={25} /> */}
            {/* ) : ( */}
            <BsStar size={25} />
            {/* )} */}
          </S.StarButton>
        </S.Star>
        <S.WrapTitleDescription>
          <h1>{videoApi?.nome}</h1>
          <h2>{videoApi?.descricao}</h2>
        </S.WrapTitleDescription>
      </S.WrapInfo>
    </S.Container>
  );
};
