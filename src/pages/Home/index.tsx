import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ClassesSection } from '../../components/ClassesSection';
import DivideLine from '../../components/DivideLine';
import { FavoritesSection } from '../../components/FavoritesSection';
import { Footer } from '../../components/Footer';
import { getMultipleClassesByTopic, getClasses } from '../../fetch/videos';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import { Video } from '../../types/Video';
import * as S from './styles';

export type ClassesFilter = {
  topico?: string;
  tags?: string[];
  nome?: string;
  orderBy?: string;
  pagina?: number;
  itensPorPagina?: number;
  orderDirection?: 'ASC' | 'DESC';
};

export const Home = () => {
  const [classes, setClasses] = useState<Video[]>([]);
  const [openClasses, setOpenClasses] = useState<Video[]>([]);
  const [tutoringClasses, setTutoringClasses] = useState<Video[]>([]);
  const [classesFilters, setClassesFilters] = useState<ClassesFilter | null>(
    null
  );

  const [loadingClasses, setLoadingClasses] = useState(true);
  const [loadingClassesFilter, setLoadingClassesFilter] = useState(false);

  const { isAuthenticated } = useAuth();
  const { fetchFavorites } = useFavorites();

  // Pega todas as informações ao carregar a página
  useEffect(() => {
    const loadAllClasses = async () => {
      setLoadingClasses(true);

      try {
        const { classesData, tutoringClassesData, openClassesData } =
          await getMultipleClassesByTopic();

        setClasses(classesData);
        setTutoringClasses(tutoringClassesData);
        setOpenClasses(openClassesData);
      } catch (err) {
        console.log({ err });
        toast.error('Erro ao carregar as aulas');
      } finally {
        setLoadingClasses(false);
      }
    };

    const loadOpenClasses = async () => {
      setLoadingClasses(true);
      try {
        const classesData = await getClasses({});

        setOpenClasses(classesData);
      } catch (err) {
        console.log({ err });
        toast.error('Erro ao carregar as aulas');
      } finally {
        setLoadingClasses(false);
      }
    };

    const loadFavorites = async () => {
      setLoadingClasses(true);
      try {
        await fetchFavorites();
      } catch (err) {
        console.log({ err });
        toast.error('Erro ao carregar seus favoritos');
      } finally {
        setLoadingClasses(false);
      }
    };

    if (isAuthenticated) {
      loadFavorites();
      loadAllClasses();
    } else {
      loadOpenClasses();
    }
  }, [fetchFavorites, isAuthenticated]);

  // Filtra as aulas
  useEffect(() => {
    if (!classesFilters) return;
    const filterClasses = async () => {
      setLoadingClassesFilter(true);
      try {
        const filteredData = await getClasses({ filters: classesFilters });
        setClasses(filteredData);
      } catch (err) {
        console.log({ err });
        toast.error('Erro ao filtrar as aulas');
      } finally {
        setLoadingClassesFilter(false);
      }
    };

    filterClasses();
  }, [classesFilters]);

  const handleTopicFilter = (topic: string) => {
    setClassesFilters((prevState) => {
      if (prevState) {
        return { ...prevState, topico: topic };
      }
      return { topico: topic };
    });
  };

  const selectOptions = Array.from(
    { length: 10 },
    (_, i) => `Semana ${`${i + 1}`.padStart(2, '0')}`
  );

  return (
    <>
      <S.Container>
        {isAuthenticated ? (
          <>
            <FavoritesSection isLoading={loadingClasses} />
            <DivideLine />
            <ClassesSection
              classes={classes}
              title="Aulas do curso"
              topicFilterOptions={selectOptions}
              handleTopicFilter={handleTopicFilter}
              isLoading={loadingClasses}
              filterLoading={loadingClassesFilter}
            />
            <DivideLine />
            <ClassesSection
              classes={tutoringClasses}
              title="Monitorias"
              type="tutoring"
              isLoading={loadingClasses}
            />
            <DivideLine />
          </>
        ) : null}
        <ClassesSection
          classes={openClasses}
          title="Nossos Aulões"
          type="openClasses"
          isLoading={loadingClasses}
        />
      </S.Container>
      <Footer />
    </>
  );
};
