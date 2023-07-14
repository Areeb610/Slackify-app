import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Chatspage from "./pages/Chatspage/Chatspage";
import Login from "./pages/Login/Login";
import SideBar from "./components/SideBar";
import Signup from "./pages/SignUp/Signup";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatspage} />
        <Route path="/sidebar" component={SideBar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mainpage" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
