import * as S from './styles';

type LogoSocialMediaProps = {
  src: string;
};

const LogoSocialMedia = ({ src }: LogoSocialMediaProps) => {
  return <S.LogoScMedia src={src} />;
};

export default LogoSocialMedia;
