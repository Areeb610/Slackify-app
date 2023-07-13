import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Chatspage from './pages/Chatspage';
import Login from './pages/Login';
import NewWorkspace from './pages/NewWorkspace';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={NewWorkspace} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
    </div>
  )
}

export default App;
