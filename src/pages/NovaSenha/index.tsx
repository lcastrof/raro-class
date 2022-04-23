import { Input } from '../../components/Input';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';

export const NovaSenha = () => {
  return (
    <PageMain>
      <MainTextLayout
        title="Faça sua nova senha"
        linkparagrafo1="Não recebi o código"
        icon={<MdKeyboardArrowLeft size={18} />}
      >
        <Input placeHolder="Código" />
        <Input
          placeHolder="Nova senha"
          iconRight={<AiOutlineEyeInvisible size={18} />}
          type="password"
        />
        <Input
          placeHolder="Confirmar nova senha"
          iconRight={<AiOutlineEyeInvisible size={18} />}
          type="password"
        />
        <PrimaryButton size="fullWidth" text="Criar nova senha" />
      </MainTextLayout>
    </PageMain>
  );
};
