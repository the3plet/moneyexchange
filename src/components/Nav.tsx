type Props = {
  list: boolean;
  setList: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ list, setList }: Props) => {
  const handleChangeUI = () => {
    setList(!list);
  };
  return (
    <div className="flex justify-between tv-1080x1920:py-1">
      <img
        src="/logo.jpg"
        alt="logo"
        className="p-6 py-4 tv-1080x1920:w-80 "
      ></img>
      <div className="flex items-center justify-around font-mono gap-x-4 text-[16px] tv-1080x1920:text-2xl tv-900x1600:text-xl ">
        <p className="flex items-start">GST 2022456877745511</p>
        <p className="flex items-end">Last Updated on 15/01/25</p>
      </div>
      <img
        onClick={handleChangeUI}
        src="uichange.svg"
        className="w-5 mr-6 tv-1080x1920:w-8 tv-1080x1920:mr-9 cursor-pointer"
      />
    </div>
  );
};

export default Nav;
