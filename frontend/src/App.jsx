import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Chatspage from './pages/Chatspage/Chatspage';
import Login from './components/Login';
import SideBar from './pages/SideBar';
import Signup from './components/Signup';
import MainPage from './pages/MainPage';
import Company from './pages/Company'
import Workspace from './pages/Workspacepage/Workspace';
import ProfilePage from './pages/Profilepage/Profilepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/mainpage" component={MainPage} />
      <Route path="/workspace" component={Workspace} />
      <Route path="/profile" component={ProfilePage} />
    </BrowserRouter>
    </div>
  )
}

export default App;
