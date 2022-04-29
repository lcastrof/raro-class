import { Input } from '../../components/Input';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PageMain } from '../../layouts/PageMain';
import { PrimaryButton } from '../../components/PrimaryButton';
import { MainTextLayout } from '../../layouts/MainTextLayout';
import { LinkHome } from '../../components/LinkHome';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as S from './styles';

export const NovaSenha = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validationSchema = yup.object({
    codigo: yup.string().required('Campo obrigatório'),
    novaSenha: yup.string().required('Campo obrigatório'),
    confirmarNovaSenha: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('novaSenha')], 'As senhas devem ser iguais')
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { isSubmitting, errors } = formState;

  const handleNewPassword = async (newPasswordData: FieldValues) => {
    try {
      setErrorMessage('');
      const { codigo, novaSenha } = newPasswordData;
      await api.patch('/auth/recuperar-senha', { codigo, novaSenha });
      toast.success('Nova senha gerada com sucesso!');
      navigate('/login');
    } catch (error) {
      console.log({ error });
      setErrorMessage(
        'Erro ao cadastrar nova senha. Tente novamente mais tarde'
      );
    }
  };

  return (
    <PageMain>
      <MainTextLayout
        title="Faça sua nova senha"
        linkparagrafo1={{
          url: '/recuperarsenha',
          text: 'Não recebi o código'
        }}
        icon={<MdKeyboardArrowLeft size={18} />}
        linkHome={<LinkHome />}
      >
        {errorMessage && (
          <S.ErrorMessageWrapper>
            <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
          </S.ErrorMessageWrapper>
        )}
        <form id="new-password-form" onSubmit={handleSubmit(handleNewPassword)}>
          <Input
            name="codigo"
            register={register}
            errors={errors.codigo}
            placeholder="Código"
          />
          <Input
            name="novaSenha"
            register={register}
            errors={errors.novaSenha}
            placeholder="Nova senha"
            isPassword
            type="password"
          />
          <Input
            name="confirmarNovaSenha"
            register={register}
            errors={errors.confirmarNovaSenha}
            placeholder="Confirmar nova senha"
            isPassword
            type="password"
          />
        </form>
        <PrimaryButton
          size="fullWidth"
          text="Criar nova senha"
          type="submit"
          form="new-password-form"
          loading={isSubmitting}
        />
      </MainTextLayout>
    </PageMain>
  );
};
