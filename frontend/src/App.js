import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import About from "./components/About";
import Profile from "./components/Profile";
import Status from "./components/Status";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
