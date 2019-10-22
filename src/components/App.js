import React from 'react';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Review from '../Routes/Review';
import NoMatch from '../Routes/NoMatch';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
          <div>
            <h1><Link to="/">MovieJ</Link></h1>
          </div>
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie_detail/:id" component={Detail}></Route>
          <Route path="/movie_review/:id/:r_id" component={Review}></Route>
          <Route path="/movie_review/:id/" component={Review}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>

    </Router>
  );
}
export default App;

//rsc
