import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Slider from "../../../components/slider/ts/slider";
import Warning from "../../../components/warning/ts/warning";
import { SliderData } from "../../../components/slider/data/slideData";
import MainMenu from "../../../components/mainMenu/ts/mainMenu";

function MainPage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Warning warning="Website will go down 2022-10-25 18:00 due to maintence. Sorry for Inconvinience."/>
      <Slider slides={SliderData}/>
      <MainMenu/>
    </div>
  )
}

export default MainPage;