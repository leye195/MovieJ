import React from 'react';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Review from '../Routes/Review';
import NoMatch from '../Routes/NoMatch';
import Search from '../Routes/Search';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

//rsc
