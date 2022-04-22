import { Input } from '../../components/Input';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';

export const Cadastro: React.FC = () => {
  return (
    <PageMain>
      <MainTextLayout
        title="Cadastre-se"
        subTitle="Venha ser Raro"
        linkparagrafo1="Fazer login"
        icon={<MdKeyboardArrowLeft size={18} />}
      >
        <Input placeHolder="Nome" />
        <Input placeHolder="E-mail" />
        <Input
          placeHolder="Senha"
          iconRight={<AiOutlineEyeInvisible size={18} />}
          type="password"
        />
        <Input
          placeHolder="Confirmar Senha"
          iconRight={<AiOutlineEyeInvisible size={18} />}
          type="password"
        />
        <Input placeHolder="Código da Turma" />
        <PrimaryButton size="fullWidth" text="Cadastrar" />
      </MainTextLayout>
    </PageMain>
  );
};
