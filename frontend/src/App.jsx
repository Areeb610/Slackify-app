import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Chatspage from "./pages/Chatspage/Chatspage";
import Login from "./pages/Login/Login";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage/MainPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={LandingPage} exact />
        <Route path="/chats" component={Chatspage} />
        <Route path="/sidebar" component={SideBar} />
        <Route path="/login" component={Login} />
        <Route path="/mainpage" component={MainPage} />
        <Route path= "/profilepage" component={ProfilePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
