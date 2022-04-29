import * as S from './styles';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Video } from '../../pages/Home';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import { forwardRef, useEffect, useState } from 'react';
import Spinner from '../Spinner';

type CardVideoProps = {
  classData: Video;
  fixedWidth?: boolean;
};

export const CardVideo = forwardRef<HTMLAnchorElement, CardVideoProps>(
  ({ classData, fixedWidth }, ref) => {
    const { id, thumbUrl, nome } = classData;

    const { isAuthenticated } = useAuth();
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const [isFavorited, setIsFavorited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const isAlreadyFavorited = favorites.find(
        (favorite) => favorite.id === id
      );
      setIsFavorited(!!isAlreadyFavorited);
    }, [favorites, id]);

    const handleFavorite = async (event: React.MouseEvent<HTMLElement>) => {
      setIsLoading(true);
      event.stopPropagation();
      event.preventDefault();
      if (isFavorited) {
        await removeFavorite(id);
      } else {
        await addFavorite(classData);
      }
      setIsLoading(false);
      setIsFavorited(!isFavorited);
    };

    return (
      <Link to={`/video/${id}`} ref={ref}>
        <S.Container fixedWidth={fixedWidth}>
          <S.VideoField backgroundImg={thumbUrl}>
            {isAuthenticated && (
              <S.StarButton onClick={handleFavorite} isFavorited={isFavorited}>
                {isLoading ? (
                  <Spinner size={25} />
                ) : isFavorited ? (
                  <BsStarFill size={25} />
                ) : (
                  <BsStar size={25} />
                )}
              </S.StarButton>
            )}
          </S.VideoField>
          <S.Title>{nome}</S.Title>
        </S.Container>
      </Link>
    );
  }
);
