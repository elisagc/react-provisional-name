import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./layout/navbar";
import Adventures from "./pages/Adventures";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adventures" component={Adventures} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
