import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../store';
import * as S from './styles';
import ReactPlayer from 'react-player';

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

      console.log(response.data);
    }

    loadVideo();
  }, [isAuthenticated]);

  // const thumbnail = 'https://om4.com.au/wp-content/uploads/grapes.jpg';

  return (
    <S.Container>
      {/* {isAuthenticated ? ( */}
      <ReactPlayer
        className={'react-player'}
        url={videoUrl}
        light={videoThumbnail}
        width="74vw"
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
          <p>
            ★
            <br />
            Componente
            <br />
            estrela
          </p>
        </S.Star>
        <S.WrapTitleDescription>
          <h1>{videoApi?.nome}</h1>
          <h2>{videoApi?.descricao}</h2>
        </S.WrapTitleDescription>
      </S.WrapInfo>
      {/* } */}
    </S.Container>
  );
};
