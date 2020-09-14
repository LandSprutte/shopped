import React from "react";
import "./App.css";
import HomeView from "./views/HomeView";
import SignInView from "./views/SignInView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStoreState } from "./hooks";

function App() {
  const auth = useStoreState((state) => state.auth.auth);

  return (
    <Router>
      {auth && auth.token ? (
        <Route exact path="/" component={HomeView} />
      ) : (
        <Route exact path="/" component={SignInView} />
      )}
    </Router>
  );
}

export default App;
