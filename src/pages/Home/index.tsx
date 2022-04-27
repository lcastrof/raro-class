import { useEffect, useState } from 'react';
import { ClassesSection } from '../../components/ClassesSection';
import { FavoritesSection } from '../../components/FavoritesSection';
import api from '../../services/api';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import * as S from './styles';

export type Video = {
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
  const [classes, setClasses] = useState<Video[]>([]);

  const { isAuthenticated } = useAuth();
  const { fetchFavorites } = useFavorites();

  // fazer um try catch
  useEffect(() => {
    const loadClasses = async () => {
      const { data } = await api.get('/videos', {
        params: { pagina: 1, itensPorPagina: 10 }
      });
      setClasses(data);
    };

    const loadFavorites = async () => {
      await fetchFavorites();
    };

    loadFavorites();
    loadClasses();
  }, [fetchFavorites, isAuthenticated]);

  return (
    <S.Container>
      {isAuthenticated ? (
        <>
          <FavoritesSection />
          <ClassesSection classes={classes} title="Aulas do curso" />
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
