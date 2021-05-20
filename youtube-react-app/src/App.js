import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} className="Home" />
          <Route path="/about" component={About} className="About" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
