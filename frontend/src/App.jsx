import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Chatspage from './pages/Chatspage/Chatspage';
import Login from './components/Login';
import SideBar from './pages/SideBar';
import Signup from './components/Signup';
import MainPage from './pages/MainPage';
import Company from './pages/Company'
import NewWorkspace from './pages/NewWorkspace';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/workspace" component={NewWorkspace} />
      <Route path="/mainpage" component={MainPage} />

    </BrowserRouter>
    </div>
  )
}

export default App;
