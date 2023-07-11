import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatspage from './pages/Chatspage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/chats" component={Chatspage} />
    </BrowserRouter>
  )
}

export default App;
