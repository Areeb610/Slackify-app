import SideBar from "../../components/SideBar";
import Chatspage from "../Chatspage/Chatspage";
import "../MainPage/MainPage.css"
const MainPage = () => {
    return (
        <div className="mainpage">

        <div className="sidebar">
            <SideBar />
        </div>
        <div className="chatspage">
            <Chatspage />
        </div>
        </div>
        


    )
}

export default MainPage