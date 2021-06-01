import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Start from "../src/components/Start";
import PascalTriangle from "../src/components/PascalTriangle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/pascal_triangle/:n">
              <PascalTriangle />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
