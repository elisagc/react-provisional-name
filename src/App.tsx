import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./layout/navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
