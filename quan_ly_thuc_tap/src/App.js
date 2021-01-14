import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/index";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Dat Header o day */}
        <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        </Switch>
        {/* Dat footer o day */}
      </div>
    </Router>
  );
}

export default App;
