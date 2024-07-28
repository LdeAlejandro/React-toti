import {Link, Route, Routes } from "react-router-dom";

export default function Team() {

  return (
    <div>
        
        <h2> Teams </h2>
            <ul>
                <li><Link to={`tech`}>Tech</Link></li>
                <li><Link to={`design`}>Design</Link></li>
            </ul>

            <Routes>
                <Route path={`/`} element={"Here are our teams"}/>
                <Route path={`tech`} element={"Our Tech team"}/>
                <Route path={`design`} element={"Our Design Team"} />
                
            </Routes>
       
    </div>
  )
}

