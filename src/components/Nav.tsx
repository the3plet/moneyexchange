type Props = {
  list:boolean;
  setList: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({list,setList}:Props) => {
  const handleChangeUI=()=>{
setList(!list)
  }
    return (
      <div className="flex justify-between">
          <img src="/logo.jpg" alt='logo' className='p-6 py-4 '></img>
          <img onClick={handleChangeUI} src="uichange.svg" className="w-5 mr-6"/>
      </div>
    )
  }
  
  export default Nav;

