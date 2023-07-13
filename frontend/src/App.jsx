// import './App.css'
// import {Route, BrowserRouter} from 'react-router-dom';
// import Chatspage from './pages/Chatspage';
// import Login from './pages/Login';

import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewWorkspace from "./pages/NewWorkspace";
import Chatspage from "./pages/Chatspage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SideBar from "./pages/SideBar";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={NewWorkspace} exact />
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
