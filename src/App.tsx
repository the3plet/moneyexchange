import React from "react";
import Header from "./components/header";
import Carousel from "./components/Carousel";
import CardUI from "./components/CardUI";
import Notification from "./components/Notification";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="">
      <Header />
      <Carousel />
      <CardUI/>
      <Notification/>
    </div>
  );
};

export default App;
