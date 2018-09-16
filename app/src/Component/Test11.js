import React from "react";
import {BrowserRouter as Router,Route,Link } from "react-router-dom"
const Example=()=>(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>   
            <hr/>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            
        </div>
    </Router>

);
const Home=()=> (
    <div>
        <h2>Home</h2>
    </div>

);
const About=()=>(
    <div>
        <h2>About</h2>
    </div>
);
const Topics=({match})=>(
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/a`}>a</Link>|
                <Link to={`${match.url}/b`}>b</Link>|
                <Link to={`${match.url}/c`}>c</Link>|
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
           exact
           path={match.url}
           render={()=> <h3>请选一个字母</h3>}
      />
    </div>
)   
const Topic=({match})=>(
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
export default Example