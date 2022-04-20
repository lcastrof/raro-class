import { Input } from '../../components/Input';
import { AiOutlineUser, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineKey } from 'react-icons/hi';
import { PageMain } from '../../layout/PageMain';

export const Login: React.FC = () => {
  return (
    <PageMain>
      <Input placeHolder="E-mail" icon={<AiOutlineUser size={18} />} />
      <Input
        placeHolder="senha"
        icon={<HiOutlineKey size={18} />}
        iconRight={<AiOutlineEyeInvisible size={18} />}
        type="password"
      />
    </PageMain>
  );
};
