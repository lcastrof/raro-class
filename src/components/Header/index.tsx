import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/PrimaryButton';
import { HeaderContainer, LogoButton, LogoImage } from './styles';

export const Header = () => {
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate('/');
  };

  const handleRedirectLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <LogoButton type="button" onClick={handleRedirectHome}>
        <LogoImage
          src="/assets/logo/logoHorizontal-raroAcademy.svg"
          alt="Logo da Raro Academy, com ícone de capelo e escrito Raro Academy"
        />
      </LogoButton>
      <PrimaryButton
        type="button"
        text="Login"
        size="small"
        onClick={handleRedirectLogin}
      />
    </HeaderContainer>
  );
};
