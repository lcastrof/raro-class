import { Input } from '../../components/Input';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineKey } from 'react-icons/hi';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useAuth } from '../../store';
import { LinkHome } from '../../components/LinkHome';

export const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  const validationSchema = yup.object({
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    senha: yup.string().required('Campo obrigatório')
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const { isSubmitting, errors } = formState;

  const handleLogin = async (formData: FieldValues) => {
    try {
      setErrorMessage('');
      const { email, senha } = formData;
      await login({ email, senha });
      navigate('/');
    } catch (error) {
      console.log({ error });
      if (error.response.status === 401) {
        setErrorMessage('E-mail ou senha inválidos');
      } else {
        setErrorMessage('Erro ao realizar login. Tente novamente mais tarde');
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      <PageMain>
        <MainTextLayout
          title="Conecte-se"
          subTitle="Venha ser Raro"
          linkparagrafo1={{
            url: '/recuperarsenha',
            text: 'Esqueci minha senha'
          }}
          linkparagrafo2={{
            url: '/cadastro',
            text: 'Criar Conta'
          }}
          linkHome={<LinkHome />}
        >
          {errorMessage && (
            <S.ErrorMessageWrapper>
              <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
            </S.ErrorMessageWrapper>
          )}
          <form id="login-form" onSubmit={handleSubmit(handleLogin)}>
            <Input
              name="email"
              register={register}
              errors={errors.email}
              placeHolder="E-mail"
              icon={<AiOutlineUser size={18} />}
            />
            <Input
              name="senha"
              register={register}
              errors={errors.senha}
              placeHolder="Senha"
              isPassword
              icon={<HiOutlineKey size={18} />}
              type="password"
            />
          </form>
          <PrimaryButton
            size="fullWidth"
            text="Login"
            type="submit"
            form="login-form"
            loading={isSubmitting}
          />
        </MainTextLayout>
      </PageMain>
    </>
  );
};
