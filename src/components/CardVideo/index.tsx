import * as S from './styles';
import { BsStar } from 'react-icons/bs';
import { Class } from '../../pages/Home';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store';

type CardVideoProps = {
  classData: Class;
};

export const CardVideo: React.FC<CardVideoProps> = ({ classData }) => {
  const { isAuthenticated } = useAuth();
  const { id, thumbUrl, nome } = classData;
  return (
    <Link to={`/video/${id}`}>
      <S.Container>
        <S.VideoField backgroundImg={thumbUrl}>
          {isAuthenticated && (
            <S.StarButton>
              <BsStar size={25} />
            </S.StarButton>
          )}
        </S.VideoField>
        <S.Title>{nome}</S.Title>
      </S.Container>
    </Link>
  );
};
