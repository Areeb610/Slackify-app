import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Chatspage from './pages/Chatspage';
import Login from './pages/Login';
import NewWorkspace from './pages/NewWorkspace';
import SideBar from './pages/SideBar';
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';
import Login from './components/Login';
import Company from './pages/Company'

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={MainPage} />
      <Route path="/" component={NewWorkspace} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/workspace" component={Company} />
    </BrowserRouter>
    </div>
  )
}

export default App;
