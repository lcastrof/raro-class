import { Button } from './styles';

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
    <Button size={size} {...props}>
      {text}
    </Button>
  );
};
