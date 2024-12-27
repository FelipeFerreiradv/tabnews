interface CapslockProps {
  text: string;
}

const Capslock = ({ text }: CapslockProps) => {
  return (
    <>
      <h1>{text.toUpperCase()}</h1>
    </>
  );
};

export default Capslock;
