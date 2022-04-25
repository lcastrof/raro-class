import { Input } from '../../components/Input';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { toast } from 'react-toastify';

export const Cadastro: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validationSchema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    senha: yup.string().required('Campo obrigatório'),
    confirmarSenha: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
    codigo: yup.string().required('Campo obrigatório')
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { isSubmitting, errors } = formState;

  const handleRegister = async (userData: FieldValues) => {
    try {
      setErrorMessage('');
      const { nome, email, senha, codigo } = userData;
      await api.post('/auth/cadastrar', { nome, email, senha, codigo });
      toast.success('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.log({ error });
      if (error.response.status === 400) {
        setErrorMessage('Usuário já cadastrado');
      } else {
        setErrorMessage(
          'Erro ao realizar cadastro. Tente novamente mais tarde'
        );
      }
    }
  };

  return (
    <PageMain>
      <MainTextLayout
        title="Cadastre-se"
        subTitle="Venha ser Raro"
        linkparagrafo1="Fazer login"
        icon={<MdKeyboardArrowLeft size={18} />}
      >
        {errorMessage && (
          <S.ErrorMessageWrapper>
            <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
          </S.ErrorMessageWrapper>
        )}
        <form id="register-form" onSubmit={handleSubmit(handleRegister)}>
          <Input
            name="nome"
            register={register}
            errors={errors.nome}
            placeholder="Nome"
          />
          <Input
            name="email"
            register={register}
            errors={errors.email}
            placeholder="E-mail"
          />
          <Input
            name="senha"
            register={register}
            errors={errors.senha}
            placeholder="Senha"
            isPassword
            type="password"
          />
          <Input
            name="confirmarSenha"
            register={register}
            errors={errors.confirmarSenha}
            placeholder="Confirmar Senha"
            isPassword
            type="password"
          />
          <Input
            name="codigo"
            register={register}
            errors={errors.codigo}
            placeholder="Código da Turma"
          />
        </form>
        <PrimaryButton
          size="fullWidth"
          text="Cadastrar"
          type="submit"
          form="register-form"
          loading={isSubmitting}
        />
      </MainTextLayout>
    </PageMain>
  );
};
