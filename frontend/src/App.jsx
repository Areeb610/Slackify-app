import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mainpage" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
