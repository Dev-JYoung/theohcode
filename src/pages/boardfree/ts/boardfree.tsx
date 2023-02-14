import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Wallpaper from "../../../components/wallpaper/ts/wallpaper";
import Firing from "../../../components/firing/ts/firing";

function FreeBoardPage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Wallpaper/>
      <Firing/>
    </div>
  )
}

export default FreeBoardPage;