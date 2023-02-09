/******APP******/

/***GENERAL***/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

/***PAGES***/
import Homepage from "./Homepage";

/***APP***/
export default function App() {
  /*DOM*/
  return (
    <Router>
      <div className="app">
        {/*ROUTES*/}
        <Switch>
          {/*HOMEPAGE*/}
          <Route exact path="/SNAP">
            <Homepage />
          </Route>
          {/*REDIRECT*/}
          <Route>
            <Redirect to="/SNAP" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
