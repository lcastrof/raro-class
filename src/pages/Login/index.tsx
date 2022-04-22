import { Input } from '../../components/Input';
import { AiOutlineUser, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineKey } from 'react-icons/hi';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';

export const Login: React.FC = () => {
  return (
    <PageMain>
      <MainTextLayout
        title="Conecte-se"
        subTitle="Venha ser Raro"
        linkparagrafo1="Esqueci minha senha"
        linkparagrafo2="Criar Conta"
      >
        <Input placeHolder="E-mail" icon={<AiOutlineUser size={18} />} />
        <Input
          placeHolder="Senha"
          icon={<HiOutlineKey size={18} />}
          iconRight={<AiOutlineEyeInvisible size={18} />}
          type="password"
        />
        <PrimaryButton size="fullWidth" text="Login" />
      </MainTextLayout>
    </PageMain>
  );
};
