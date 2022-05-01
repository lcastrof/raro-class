import { CommentCard } from '../CommentCard';
import { InfoVideoClass } from '../../pages/VideoClass';
import * as S from './styles';

type CommentListProps = {
  comments: InfoVideoClass[];
  videoId: string;
};

export const CommentList = ({ comments, videoId }: CommentListProps) => {
  if (comments.length === 0) {
    return (
      <S.ContainerCommentList>
        <S.EmptyComments>
          Não há comentários disponíveis neste vídeo.
        </S.EmptyComments>
      </S.ContainerCommentList>
    );
  }

  return (
    <S.ContainerCommentList>
      {comments.map((commentsItems) => (
        <CommentCard
          key={commentsItems.id}
          avatar={commentsItems.aluno.foto}
          userName={commentsItems.aluno.nome}
          userComment={commentsItems.texto}
          upVotes={commentsItems.upVotes}
          downVotes={commentsItems.downVotes}
          video={videoId}
          commentId={commentsItems.id}
        />
      ))}
    </S.ContainerCommentList>
  );
};
