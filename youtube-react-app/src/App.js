import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Videos from "./Components/Videos.js";
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
          <Route path="/videos/:id" component={Videos} className="Videos" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
