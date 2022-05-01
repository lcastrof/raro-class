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
import { formataDate } from '../../helpers/date';
import { FavoriteButton } from '../../components/FavoriteButton';
import { Video } from '../../types/Video';
import { useAuth } from '../../store/auth';

type Aluno = {
  id: string;
  admin: boolean;
  nome: string;
  email: string;
  senha: string;
  foto: string;
};

export type Comment = {
  id: string;
  texto: string[];
  aluno: Aluno;
  upVotes: number;
  downVotes: number;
  meuVote: {
    id: string;
    vote: 'up' | 'down';
    aluno: Aluno;
  };
};

export const VideoClass = () => {
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  const [comments, setComments] = useState<Comment[]>([]);

  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const { isAuthenticated } = useAuth();

  const [videoUrl, setVideoUrl] = useState();
  const [videoThumbnail, setVideoThumbnail] = useState();
  const [videoApi, setVideoApi] = useState<Video>();

  useEffect(() => {
    async function loadVideo() {
      setLoading(true);
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
      setLoading(true);
      const responseComments = await api.get(`/videos/${id}/comentarios`);
      setComments(responseComments.data);
      const responseRecommended = await api.get(`/videos/${id}/recomendacoes`);
      setRecommendedVideos(responseRecommended.data);
      setLoading(false);
    }

    getCommentsAndRecommended();
  }, [id]);

  if (loading) {
    return (
      <S.Container>
        <S.ContainerPLayerVideo>
          <SkeletonPlayerVideo />
        </S.ContainerPLayerVideo>
        <S.ContainerRight>
          <SkeletonColunmListVideos />
        </S.ContainerRight>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ContainerPLayerVideo>
          <ReactPlayer
            className={'react-player'}
            url={videoUrl}
            light={videoThumbnail}
            height="auto"
            width="100%"
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
            {videoApi && isAuthenticated ? (
              <S.Star>
                <FavoriteButton video={videoApi} defaultColor="primary" />
              </S.Star>
            ) : null}
            <S.WrapTitleDescription>
              <h1>{videoApi?.nome}</h1>
              <h2>{videoApi?.descricao}</h2>
              {videoApi?.dataPublicacao ? (
                <time>{formataDate(videoApi?.dataPublicacao)}</time>
              ) : null}
            </S.WrapTitleDescription>
          </S.WrapInfo>
        </S.ContainerPLayerVideo>
        <DivideLine />
        <CommentList comments={comments} videoId={videoApi?.id as string} />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.TitleRecommended>
          <p>Vídeos Recomendados</p>
        </S.TitleRecommended>
        <VideoRecomendedList videoRecomended={recommendedVideos} />
      </S.ContainerRight>
    </S.Container>
  );
};
