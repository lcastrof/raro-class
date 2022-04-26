import { Input } from '../../components/Input';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';

export const NovaSenha = () => {
  return (
    <PageMain>
      <MainTextLayout
        title="Faça sua nova senha"
        linkparagrafo1={{
          url: '/recuperarsenha',
          text: 'Não recebi o código'
        }}
        icon={<MdKeyboardArrowLeft size={18} />}
      >
        <Input placeHolder="Código" />
        <Input placeHolder="Nova senha" type="password" />
        <Input placeHolder="Confirmar nova senha" type="password" />
        <PrimaryButton size="fullWidth" text="Criar nova senha" />
      </MainTextLayout>
    </PageMain>
  );
};
