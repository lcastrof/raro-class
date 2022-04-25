import { useEffect, useState } from 'react';
import { RowTitle } from '../../components/RowTitle';
import Slider from '../../components/Slider';
import api from '../../services/api';
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

const mock: Class[] = [
  {
    createdAt: '2022-04-09T13:29:21.652Z',
    dataPublicacao: null,
    descricao: 'Aulão POO com o Rodrigo Sol',
    duracao: '2h',
    id: '25526467-e9d7-40cb-bc60-76bb85419915',
    nome: 'Aulão POO',
    tags: [],
    thumbUrl: '',
    topico: 'semana 1',
    url: ''
  },
  {
    createdAt: '2022-04-09T13:29:21.652Z',
    dataPublicacao: null,
    descricao: 'Aulão POO com o Rodrigo Sol',
    duracao: '2h',
    id: '25526467-e9d7-40cb-bc60-76bb85419915',
    nome: 'Aulão POO',
    tags: [],
    thumbUrl: '',
    topico: 'semana 1',
    url: ''
  },
  {
    createdAt: '2022-04-09T13:29:21.652Z',
    dataPublicacao: null,
    descricao: 'Aulão POO com o Rodrigo Sol',
    duracao: '2h',
    id: '25526467-e9d7-40cb-bc60-76bb85419915',
    nome: 'Aulão POO',
    tags: [],
    thumbUrl: '',
    topico: 'semana 1',
    url: ''
  },
  {
    createdAt: '2022-04-09T13:29:21.652Z',
    dataPublicacao: null,
    descricao: 'Aulão POO com o Rodrigo Sol',
    duracao: '2h',
    id: '25526467-e9d7-40cb-bc60-76bb85419915',
    nome: 'Aulão POO',
    tags: [],
    thumbUrl: '',
    topico: 'semana 1',
    url: ''
  }
];

export const Home = () => {
  // Ordenar por tópicos depois
  const [classes, setClasses] = useState<Class[]>([]);
  const [videosFavorite, setVideosFavorites] = useState([]);
  const [sliderHideOrShow, setSliderHideOrShow] = useState(true);
  const [noneVideoFavorite, setNoneVideoFavorite] = useState(false);
  const [loadingVideoFavorite, setLoadingVideoFavorite] = useState(false);

  const isAuthenticated = false;

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
      return <p>Nenhum vídeo</p>;
    }
    if (loadingVideoFavorite) {
      return <p>Carregando vídeos Favoritos</p>;
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
      <>
        <RowTitle
          type={'favorite'}
          title="Favoritos"
          display="show"
          sliderHideOrShow={sliderHideOrShow}
          setSliderHideOrShow={setSliderHideOrShow}
        />

        {/* Mostrar vídeos favoritos apenas quando o aluno estiver autenticado. */}
        {NoneOrLoadingOrGetVideosFavorite()}

        <RowTitle
          title="Nossos Aulões"
          level={isAuthenticated ? 2 : 1}
          display="hide"
        />
        <S.ClassesWrapper>
          {mock.map((classItem) => (
            <div key={classItem.id}>
              <h2>{classItem.nome}</h2>
              <p>{classItem.descricao}</p>
            </div>
          ))}
        </S.ClassesWrapper>
      </>
    </S.Container>
  );
};
