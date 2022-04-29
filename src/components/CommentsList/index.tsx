import { CommentCard } from '../CommentCard';
import { InfoVideoClass } from '../InfoVideoClass';
import * as S from './styles';

type CommentListProps = {
  comments: InfoVideoClass[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
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
          video={commentsItems.id}
          commentId={commentsItems.aluno.id}
        />
      ))}
    </S.ContainerCommentList>
  );
};
