import { LogoScMedia } from './styles';

type LogoSocialMediaProps = {
  src: string;
};

const LogoSocialMedia = ({ src }: LogoSocialMediaProps) => {
  return <LogoScMedia src={src} />;
};

export default LogoSocialMedia;
