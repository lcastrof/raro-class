import { Input } from '../../components/Input';
import { VscMail } from 'react-icons/vsc';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';

export const RecuperarSenha = () => {
  return (
    <PageMain>
      <MainTextLayout
        title="Mude sua senha"
        linkparagrafo1={{
          url: '/login',
          text: 'fazer login'
        }}
        linkparagrafo2={{
          url: '/novasenha',
          text: 'já tenho o código'
        }}
        icon={<MdKeyboardArrowLeft size={18} />}
        iconRight={<MdKeyboardArrowRight size={18} />}
      >
        <Input placeHolder="Email" icon={<VscMail size={18} />} />
        <PrimaryButton size="fullWidth" text="Solicitar código" />
      </MainTextLayout>
    </PageMain>
  );
};
