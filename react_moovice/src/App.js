import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './Components/Discover';
import DiscoverBattle from './Components/DiscoverBattle';
import MyList from './Components/MyList';
import Popular from './Components/Popular';
import PopularBattle from './Components/PopularBattle';




class App extends Component {
  render() {
    
    return (
     
        <div>
           <Router>
             <div className="container">
          <nav>
            <ul>

              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular </Link></li>
              <li><Link to="/popular-battle/">Popular-battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>

            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Discover/>
            </Route>
            <Route path="/battle/">
              <DiscoverBattle />
            </Route>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
          </Switch>
          
         </Router > 
        </div>
        </div>
       
    );
  }
}
export default App;

