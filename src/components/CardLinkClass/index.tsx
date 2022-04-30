import { forwardRef, useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import { Video } from '../../types/Video';
import Spinner from '../Spinner';
import * as S from './styles';

type CardVideoProps = {
  videoRecomendedData: Video;
  fixedWidth?: boolean;
};

export const CardLinkClass = forwardRef<HTMLAnchorElement, CardVideoProps>(
  ({ videoRecomendedData, fixedWidth }, ref) => {
    const { id, nome, duracao } = videoRecomendedData;

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
        await addFavorite(videoRecomendedData);
      }
      setIsLoading(false);
      setIsFavorited(!isFavorited);
    };
    return (
      <Link to={`/video/${id}`} ref={ref}>
        <S.Container fixedWidth={fixedWidth}>
          {isAuthenticated && (
            <S.Star>
              <S.StarButton onClick={handleFavorite} isFavorited={isFavorited}>
                {isLoading ? (
                  <Spinner size={25} />
                ) : isFavorited ? (
                  <BsStarFill size={25} />
                ) : (
                  <BsStar size={25} />
                )}
              </S.StarButton>
            </S.Star>
          )}
          <S.WrapInfo>
            <S.Title>{nome}</S.Title>
            <S.WrapIconInfo>
              <S.IconPlay
                src="/assets/icon/icon-PlayDecoration.svg"
                alt="Play Aula Decoração"
              />
              <S.VideoTimeLenght>{duracao}</S.VideoTimeLenght>
            </S.WrapIconInfo>
          </S.WrapInfo>
        </S.Container>
      </Link>
    );
  }
);
