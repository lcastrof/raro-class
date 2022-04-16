type HomeProps = {
  title: string;
};

export const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
