import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      Ola Toti React Router
      <div>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
      </div>
      
      <Switch>
        <Route exact path="/">
          Home component
        </Route>
        <Route exact path="/about">
          About component
        </Route>
        <Route exact path="/dashboard">
          Dashboard component
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
