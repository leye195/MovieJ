import React from 'react';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Review from '../routes/Review';
import NoMatch from '../routes/NoMatch';
import Search from '../routes/Search';
import People from '../routes/People';
import Login from '../routes/Login';
import SignUp from '../routes/SignUp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import powered_by_rectangle_green from '../img/powered_by_rectangle_green.svg'


import '../style/App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/ko-KR" component={Home}></Route>
          <Route path="/en-US" component={Home}></Route>
          <Route path="/movie_detail/:id/:lan" component={Detail}></Route>
          <Route path="/movie_detail/:id" component={Detail}></Route>
          <Route path="/movie_review/:id/:lan/:r_id" component={Review}></Route>
          <Route path="/movie_review/:id/:lan" component={Review}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/people/:name" component={People}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <footer>
          <a className="giticon" href="https://github.com/leye195"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
          <p style={{marginTop:"0px"}}>CopyRight@YJDaniel</p>            
          <div>
            <img src={powered_by_rectangle_green} alt="tmdb" style={{width:"150px"}}></img>
          </div>
        </footer>
      </div>
    </Router>
  );
}
export default App;

//rsc
