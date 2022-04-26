import { RowTitle } from '../../components/RowTitle';
import { Class } from '../../pages/Home';
import { CardVideo } from '../CardVideo';
import * as S from './styles';

type ClassesSectionProps = {
  title: string;
  titleLevel?: 1 | 2;
  classes: Class[];
};

export const ClassesSection: React.FC<ClassesSectionProps> = ({
  classes,
  title,
  titleLevel = 2
}) => {
  if (classes.length === 0) {
    return (
      <S.Container>
        <RowTitle title={title} level={titleLevel} />
        <S.EmptyMessage>
          Não há aulas disponíveis ainda. Cheque novamente mais tarde.
        </S.EmptyMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <RowTitle title={title} level={titleLevel} />
      <S.ClassesWrapper>
        {classes.map((classItem) => (
          <CardVideo key={classItem.id} classData={classItem} />
        ))}
      </S.ClassesWrapper>
    </S.Container>
  );
};
