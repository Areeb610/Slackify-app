import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatspage from './pages/Chatspage';
import Login from './pages/Login';
import Signup from './pages/Signup';

import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatspage from "./pages/Chatspage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SideBar from "./pages/SideBar";
function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/login" component={Login} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
    </div>
  )
}

export default App;
