import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Warning from "../../../components/warning/ts/warning";

function MainPage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Warning warning="Website will go down 2022-10-25 18:00 due to maintence. Sorry for Inconvinience."/>
    </div>
  )
}

export default MainPage;