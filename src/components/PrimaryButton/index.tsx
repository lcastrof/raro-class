import * as S from './styles';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'fullWidth';
  text: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  size = 'fullWidth',
  text,
  ...props
}) => {
  return (
    <S.Button size={size} {...props}>
      {text}
    </S.Button>
  );
};
