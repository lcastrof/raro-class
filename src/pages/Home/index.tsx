import { useEffect, useState } from 'react';
import { RowTitle } from '../../components/RowTitle';
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
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadClasses = async () => {
      const { data } = await api.get('/videos');
      setClasses(data);
    };

    loadClasses();
  }, []);
  console.log({ classes });
  return (
    <S.Container>
      {isAuthenticated ? (
        <>
          <RowTitle title="Favoritos" type="favorite" />
          <RowTitle title="Curso ReactJS" />
          <S.ClassesWrapper>
            {mock.map((classItem) => (
              <div key={classItem.id}>
                <h2>{classItem.nome}</h2>
                <p>{classItem.descricao}</p>
              </div>
            ))}
          </S.ClassesWrapper>
        </>
      ) : (
        <>
          <RowTitle title="Nossos Aulões" level={1} />
          <S.ClassesWrapper>
            {mock.map((classItem) => (
              <div key={classItem.id}>
                <h2>{classItem.nome}</h2>
                <p>{classItem.descricao}</p>
              </div>
            ))}
          </S.ClassesWrapper>
        </>
      )}
    </S.Container>
  );
};
