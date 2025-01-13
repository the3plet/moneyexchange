import Carousel from "./components/Carousel";
import CardUI from "./components/CardUI";
import Notification from "./components/Notification";
import Nav from "./components/Nav";


const App = () => {
  return (
    <div className="">
     <Nav/>
      <Carousel />
      <CardUI/>
      <Notification/>
    </div>
  );
};

export default App;