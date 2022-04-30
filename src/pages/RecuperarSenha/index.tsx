import { Input } from '../../components/Input';
import { VscMail } from 'react-icons/vsc';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
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

export const RecuperarSenha = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().required('Campo obrigatório').email('Email inválido')
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { isSubmitting, errors } = formState;

  const handleRequestCode = async (codeData: FieldValues) => {
    try {
      setErrorMessage('');
      const { email } = codeData;
      await api.post('/auth/solicitar-codigo', { email });
      toast.success('Código enviado com sucesso!');
      navigate('/novasenha');
    } catch (error) {
      console.log({ error });
      setErrorMessage('Erro ao enviar o código. Tente novamente mais tarde');
    }
  };

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
        linkHome={<LinkHome />}
      >
        {errorMessage ? (
          <S.ErrorMessageWrapper>
            <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
          </S.ErrorMessageWrapper>
        ) : null}
        <form id="request-code-form" onSubmit={handleSubmit(handleRequestCode)}>
          <Input
            name="email"
            register={register}
            errors={errors.email}
            placeholder="E-mail"
            icon={<VscMail size={18} />}
          />
        </form>
        <PrimaryButton
          size="fullWidth"
          text="Solicitar código"
          type="submit"
          form="request-code-form"
          loading={isSubmitting}
        />
      </MainTextLayout>
    </PageMain>
  );
};
