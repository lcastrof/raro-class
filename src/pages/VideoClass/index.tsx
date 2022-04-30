import { useEffect, useState } from 'react';
import api from '../../services/api';
import * as S from './styles';
import { SkeletonPlayerVideo } from '../../components/Skeleton/SkeletonPlayerVideo';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import DivideLine from '../../components/DivideLine';
import { CommentList } from '../../components/CommentsList';
import { VideoRecomendedList } from '../../components/VideoRecomendedList';
import { SkeletonColunmListVideos } from '../../components/Skeleton/SkeletonColunmListVideos';

export type InfoVideoClass = {
  id: string;
  nome: string;
  url: string;
  thumbUrl: string;
  descricao: string;
  createdAt: string;
  duracao: string;
  dataPublicacao?: string | null;
  topico: string;
  tags: string[];
  texto: string[];
  aluno: {
    id: string;
    admin: boolean;
    nome: string;
    email: string;
    senha: string;
    foto: string;
  };
  upVotes: number;
  downVotes: number;
};

export const VideoClass = () => {
  const [recommendedVideos, setRecommendedVideos] = useState<InfoVideoClass[]>(
    []
  );

  const [comments, setComments] = useState<InfoVideoClass[]>([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const [videoUrl, setVideoUrl] = useState();
  const [videoThumbnail, setVideoThumbnail] = useState();
  const [videoApi, setVideoApi] = useState<InfoVideoClass>();

  useEffect(() => {
    async function loadVideo() {
      const response = await api.get(`/videos/${id}`);
      setVideoUrl(response.data.url);
      setVideoThumbnail(response.data.thumbUrl);
      setVideoApi(response.data);
      setLoading(false);
    }

    loadVideo();
  }, [id]);

  useEffect(() => {
    async function getCommentsAndRecommended() {
      const responseComments = await api.get(`/videos/${id}/comentarios`);
      setComments(responseComments.data);
      const responseRecommended = await api.get(`/videos/${id}/recomendacoes`);
      setRecommendedVideos(responseRecommended.data);
    }

    getCommentsAndRecommended();
  }, [id]);

  if (loading) {
    return (
      <S.Container2>
        <S.ContainerPLayerVideo>
          <SkeletonPlayerVideo />
        </S.ContainerPLayerVideo>
        <S.ContainerRight>
          <SkeletonColunmListVideos />
        </S.ContainerRight>
      </S.Container2>
    );
  }

  return (
    <S.Container2>
      <S.Container>
        <S.ContainerLeft>
          <S.ContainerPLayerVideo>
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
                    <img
                      src={'/assets/icon/icon-playVideo.svg'}
                      alt="Play vídeo"
                    />
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
          </S.ContainerPLayerVideo>
          <DivideLine />
          <CommentList comments={comments} />
        </S.ContainerLeft>
      </S.Container>
      <S.ContainerRight>
        <S.TitleRecommended>Vídeos Recomendados</S.TitleRecommended>
        <VideoRecomendedList videoRecomended={recommendedVideos} />
      </S.ContainerRight>
    </S.Container2>
  );
};
