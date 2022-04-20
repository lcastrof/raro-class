import LogoSocialMedia from '../../components/LogoSocialMedia';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Container>
      <S.WrapIcons>
        <a
          href="https://discord.com/invite/eVf858gKwn"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoDiscord.svg" />
        </a>
        <a
          href="https://www.facebook.com/raroacademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoFacebook.svg" />
        </a>
        <a
          href="https://www.instagram.com/raroacademy/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoInstagram.svg" />
        </a>
        <a
          href="https://www.raroacademy.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <S.StarIcon>
            <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoRaroAcademy.svg" />
          </S.StarIcon>
        </a>

        <a
          href="https://www.linkedin.com/showcase/raroacademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoLinkedin.svg" />
        </a>
        <a
          href="https://twitter.com/RaroAcademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoTwitter.svg" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCAUAbOc54PreKLahvnt5jrw"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoYouTube.svg" />
        </a>
      </S.WrapIcons>

      <S.WrapText>
        <S.TermsPrivacyLink>
          <a href="#">Termos de Uso</a>
          <span>•</span>
          <a href="#">Política de Privacidade</a>
        </S.TermsPrivacyLink>
        <p>© 2022 Raro Labs</p>
      </S.WrapText>
    </S.Container>
  );
};
