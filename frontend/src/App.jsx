import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatspage from './pages/Chatspage';
import Login from './components/Login';
import Company from './pages/Company'

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatspage} />
      <Route path="/login" component={Login} />
      <Route path="/workspace" component={Company} />
    </BrowserRouter>
    </div>
  )
}

export default App;
