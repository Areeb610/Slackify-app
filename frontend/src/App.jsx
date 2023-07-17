import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Chatspage from './pages/Chatspage/Chatspage';
import Login from './pages/Login/Login';
import SideBar from './components/SideBar';
import Signup from './/pages/Signup/Signup';
import MainPage from './pages/MainPage/MainPage';
import Workspace from './pages/Workspacepage/Workspace';
import ProfilePage from './pages/Profilepage/Profilepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={MainPage} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/mainpage" component={MainPage} />
      <Route path="/workspace" component={Workspace} />
      <Route path="/profile" component={ProfilePage} />
    </BrowserRouter>
    </div>
  );
}

export default App;
