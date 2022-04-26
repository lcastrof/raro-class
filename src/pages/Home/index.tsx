import { useEffect, useState } from 'react';
import { ClassesSection } from '../../components/ClassesSection';
import { FavoritesSection } from '../../components/FavoritesSection';
import api from '../../services/api';
import { useAuth } from '../../store';
import * as S from './styles';

export type Class = {
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

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadClasses = async () => {
      const { data } = await api.get('/videos', {
        params: { pagina: 1, itensPorPagina: 10 }
      });
      setClasses(data);
    };

    loadClasses();
  }, [isAuthenticated]);

  return (
    <S.Container>
      {isAuthenticated ? (
        <>
          <FavoritesSection />
          <ClassesSection
            classes={classes.slice(0, 0)}
            title="Aulas do curso"
          />
        </>
      ) : (
        <ClassesSection
          classes={classes}
          title="Nossos Aulões"
          titleLevel={1}
        />
      )}
    </S.Container>
  );
};
