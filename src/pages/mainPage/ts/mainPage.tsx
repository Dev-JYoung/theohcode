import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Warning from "../../../components/warning/ts/warning";

function MainPage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Warning/>
    </div>
  )
}

export default MainPage;