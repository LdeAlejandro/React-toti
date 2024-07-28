import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import User from "./User";
import Team from "./Team";

function App() {
  return (
    <Router>
      Ola Toti React Router
      <div>
        
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
      </div>
      
      <Routes>

        <Route path="/" element={<Home />}/>
        
        <Route path="/about" element={<About />}/>
        
        <Route path="/dashboard" element={<Dashboard />}/>
      
        <Route path="/user/:id" element ={<User />}/> 

        <Route path="/team/*" element={<Team />} />

        <Route path="*" element={"Not Found"}/>

      </Routes>

    </Router>
  );
}

export default App;
