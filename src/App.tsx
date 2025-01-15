import Notification from "./components/Notification";
import Nav from "./components/Nav";
import ListCard from "./components/ListCard";
import { useState } from "react";
import GridCard from "./components/GridCard";
import Banner from "./components/Banner";


const App = () => {
  const [list,setList]= useState<boolean>(false);
  return (
    <div className="">
     <Nav list={list} setList={setList}/>
      <Banner/>
      {list ? <ListCard/> : <GridCard/>}
      <Notification/>
    </div>
  );
};

export default App;