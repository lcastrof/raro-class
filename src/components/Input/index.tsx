import { ReactElement, useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import { IconType } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as S from './styles';

type InputProps = {
  placeHolder: string;
  icon?: ReactElement<IconType>;
  isPassword?: boolean;
  type?: string;
  name?: string;
  register?: (name: string) => void;
  errors?: FieldErrors;
};

export const Input = ({
  placeHolder,
  name,
  icon,
  type,
  errors,
  register,
  isPassword
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container className="input-container">
      {icon}
      <S.Input
        {...register?.(name || '')}
        name={name}
        placeholder={placeHolder}
        type={showPassword ? 'text' : type}
        isInvalid={!!errors}
      />

      {isPassword && (
        <button
          className="icon-action"
          type="button"
          onClick={handleShowPassword}
        >
          {showPassword ? (
            <AiOutlineEye size={18} />
          ) : (
            <AiOutlineEyeInvisible size={18} />
          )}
        </button>
      )}
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </S.Container>
  );
};
