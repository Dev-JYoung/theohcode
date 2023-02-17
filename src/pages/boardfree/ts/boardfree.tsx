import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Wallpaper from "../../../components/wallpaper/ts/wallpaper";
import Firing from "../../../components/firing/ts/firing";
import CommunityBoard from "../../../components/communityBoard/ts/communityBoard";

function FreeBoardPage() {
  return(
    <div className="mainPage">
      <Header/>
      <MenuBar/>
      <Wallpaper/>
      <Firing/>
      <CommunityBoard/>
    </div>
  )
}

export default FreeBoardPage;