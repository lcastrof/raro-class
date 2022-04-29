import * as S from './styles';
import { BsStar } from 'react-icons/bs';
// import { Video } from '../../pages/Home';
import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../store/auth';
// import { useFavorites } from '../../store/favorites';
// import { forwardRef, useEffect, useState } from 'react';
// import Spinner from '../Spinner';

// type CardVideoProps = {
//   classData: Video;
//   fixedWidth?: boolean;
// };

// export const CardLinkClass = forwardRef<HTMLAnchorElement>(
//   ({ classData, fixedWidth }, ref) => {
//     const { id, thumbUrl, nome } = classData;

//     const { isAuthenticated } = useAuth();
//     const { favorites, addFavorite, removeFavorite } = useFavorites();

//     const [isFavorited, setIsFavorited] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//       const isAlreadyFavorited = favorites.find(
//         (favorite) => favorite.id === id
//       );
//       setIsFavorited(!!isAlreadyFavorited);
//     }, [favorites, id]);

//     const handleFavorite = async (event: React.MouseEvent<HTMLElement>) => {
//       setIsLoading(true);
//       event.stopPropagation();
//       event.preventDefault();
//       if (isFavorited) {
//         await removeFavorite(id);
//       } else {
//         await addFavorite(classData!);
//       }
//       setIsLoading(false);
//       setIsFavorited(!isFavorited);
//     };

export const CardLinkClass = () => {
  return (
    // <Link to={`/video/${id}`} ref={ref}>
    <NavLink
      to={'#'}
      style={(isActive) => ({
        backgroundColor: isActive ? '#e1e0f5' : 'transparent'
      })}
    >
      <S.Container>
        {/* {isAuthenticated && ( */}
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
        <S.WrapInfo>
          <S.Title>
            Aula 1 - Como componentizar seu projeto e com Styled Components.
          </S.Title>
          <S.WrapIconInfo>
            <S.IconPlay
              src="/assets/icon/icon-PlayDecoration.svg"
              alt="Play Aula Decoração"
            />
            <S.VideoTimeLenght>2h</S.VideoTimeLenght>
          </S.WrapIconInfo>
        </S.WrapInfo>
      </S.Container>
    </NavLink>

    /*<Link to={`/video/${id}`} ref={ref}>
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
            </Link>*/
  );
};
// );
