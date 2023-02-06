import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Wallpaper from "../../../components/wallpaper/ts/wallpaper";
import Writing from "../../../components/writing/ts/writing";

function WritePage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Wallpaper/>
      <Writing/>
    </div>
  )
}

export default WritePage;