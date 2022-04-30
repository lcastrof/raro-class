import * as S from './styles';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import { forwardRef, useEffect, useState } from 'react';
import Spinner from '../Spinner';
import ScrollSign from '../ScrollSign';
import { Video } from '../../types/Video';
import { formataDate } from '../../helpers/date';

type CardVideoProps = {
  classData: Video;
  fixedWidth?: boolean;
};

export const CardVideo = forwardRef<HTMLAnchorElement, CardVideoProps>(
  ({ classData, fixedWidth }, ref) => {
    const { id, thumbUrl, nome, dataPublicacao, duracao } = classData;

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
          <S.TitleWrapper>
            <img src="/assets/icon/icon-playTitle.svg" alt="Play icon" />
            <ScrollSign>
              <S.Title>{nome}</S.Title>
            </ScrollSign>
          </S.TitleWrapper>
          <S.SecondaryInfo>
            {dataPublicacao ? <time>{formataDate(dataPublicacao)}</time> : null}
            <span>•</span>
            <p>{duracao}</p>
          </S.SecondaryInfo>
        </S.Container>
      </Link>
    );
  }
);
