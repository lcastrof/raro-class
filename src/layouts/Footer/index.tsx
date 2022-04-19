import LogoSocialMedia from '../../components/LogoSocialMedia';
// import { FaFacebook } from 'react-icons/fa';
import {
  Container,
  StarIcon,
  TermsPrivacyLink,
  WrapIcons,
  WrapText
} from './styles';

const Footer = () => {
  return (
    <Container>
      <WrapIcons>
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
          {/* <FaFacebook
            style={{ margin: '0 15px 0 15px' }}
            color="#FBFBFE"
            size="30px"
          /> */}
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
          <StarIcon>
            <LogoSocialMedia src="/assets/icon/socialMedia/icon-logoRaroAcademy.svg" />
          </StarIcon>
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
        {/* <BackgroundImg src="/assets/art/artFooterBackground.svg" /> */}
      </WrapIcons>

      <WrapText>
        <TermsPrivacyLink>
          <a href="http://www.google.com">Termos de Uso</a>
          <span>•</span>
          <a href="http://www.google.com">Política de Privacidade</a>
        </TermsPrivacyLink>
        <p>© 2022 Raro Labs</p>
      </WrapText>
    </Container>
  );
};

export default Footer;
