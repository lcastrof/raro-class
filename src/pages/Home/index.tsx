import { useEffect, useState } from 'react';
import { RowTitle } from '../../components/RowTitle';
import Slider from '../../components/Slider';
import api from '../../services/api';
import { useAuth } from '../../store';
import * as S from './styles';

type Class = {
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

export const Home = () => {
  // Ordenar por tópicos depois
  const [classes, setClasses] = useState<Class[]>([]);
  const [videosFavorite, setVideosFavorites] = useState([]);
  const [sliderHideOrShow, setSliderHideOrShow] = useState(false);
  const [noneVideoFavorite, setNoneVideoFavorite] = useState(true);
  const [loadingVideoFavorite, setLoadingVideoFavorite] = useState(false);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadClasses = async () => {
      const { data } = await api.get('/videos');
      setClasses(data);
    };

    loadClasses();

    //setLoadingVideoFavorite(true);
    const loadVideoFavorite = async () => {
      const { data } = await api.get('/videos/favorites');
      setVideosFavorites(data);
    };
    //setLoadingVideoFavorite(false);
    loadVideoFavorite();
  }, []);
  console.log({ classes });
  console.log({ videosFavorite });
  console.log({ setNoneVideoFavorite });
  console.log({ setLoadingVideoFavorite });

  const SliderProps = {
    zoomFactor: 10, // How much the image should zoom on hover in percent
    slideMargin: 10, // Margin on each side of slides
    maxVisibleSlides: 10,
    pageTransition: 1000 // Transition when flipping pages
  };

  //Rascunho, imita a api de vídeos favoritos
  const data = [
    {
      id: 1,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 2,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 15,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 41,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 18,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 19,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 12,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 122,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 12222,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 11111,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    },
    {
      id: 1222222,
      img_url:
        'https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg'
    }
  ];

  // Rascunho do slider vídeos favoritos. Fran pegou a issue para estilizar
  const NoneOrLoadingOrGetVideosFavorite = () => {
    if (noneVideoFavorite) {
      return (
        <S.NoneVideoFavorite>
          <S.imgNoFavorite
            src={'/assets/icon/icon-starNoFavorites.svg'}
          ></S.imgNoFavorite>
          <S.TextNoneVideoFavorite>
            Você ainda não tem vídeos favoritos
          </S.TextNoneVideoFavorite>
        </S.NoneVideoFavorite>
      );
    }
    if (loadingVideoFavorite) {
      return (
        <S.NoneVideoFavorite>
          <S.TextNoneVideoFavorite>
            Carregando vídeos favoritos...
          </S.TextNoneVideoFavorite>
        </S.NoneVideoFavorite>
      );
    }
    if (sliderHideOrShow) {
      return (
        <Slider {...SliderProps}>
          {data.map((videoFavorite) => (
            <div
              key={videoFavorite.id}
              onClick={() => console.log('onClick vídeos favoritos')}
            >
              <img src={videoFavorite.img_url} alt="character" />
            </div>
          ))}
        </Slider>
      );
    }
  };

  return (
    <S.Container>
      {isAuthenticated ? (
        <>
          <RowTitle
            type={'favorite'}
            title="Favoritos"
            display="show"
            sliderHideOrShow={sliderHideOrShow}
            setSliderHideOrShow={setSliderHideOrShow}
            noneVideoFavorite={noneVideoFavorite}
            setNoneVideoFavorite={setNoneVideoFavorite}
            loadingVideoFavorite={loadingVideoFavorite}
            setLoadingVideoFavorite={setLoadingVideoFavorite}
          />
          {NoneOrLoadingOrGetVideosFavorite()}
          <RowTitle title="Curso ReactJS" />
          <S.ClassesWrapper></S.ClassesWrapper>
        </>
      ) : (
        <>
          <RowTitle title="Nossos Aulões" level={1} display="hide" />
          <S.ClassesWrapper></S.ClassesWrapper>
        </>
      )}
    </S.Container>
  );
};
