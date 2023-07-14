import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Chatspage from "./pages/Chatspage";
import Login from "./components/Login";
import Homepage from "./pages/Homepage/Homepage";
import SideBar from "./pages/SideBar";
import Signup from "./components/Signup";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatspage} />
        <Route path="/login" component={Login} />
        <Route path="/sidebar" component={SideBar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/profilepage" component={ProfilePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
