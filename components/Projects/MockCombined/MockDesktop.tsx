// types
interface mockDesktopProps {
  image: string;
}

const MockDesktop = ({ image }: mockDesktopProps) => {
  return (
    <div
      className={`aspect-[600/371] w-full bg-[length:cover,75.75%] bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url('/images/projects/laptop-mock.webp'),url('${image}')`,
      }}
    ></div>
  );
};

export default MockDesktop;
