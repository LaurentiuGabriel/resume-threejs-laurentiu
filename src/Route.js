import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact/Contact";

const Routing = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/contact">
            <Suspense
              fallback={
                <Loader
                  containerStyles={{
                    background:
                      "radial-gradient(circle farthest-corner at center top,#071021,#19324a)",
                  }} 
                  innerStyles={{
                    backgroundColor: "blue",
                    width: "50vw",
                  }} 
                  barStyles={{
                    backgroundColor: "lightgreen",
                  }} 
                  dataInterpolation={(p) => `Loading ${Math.round(p)}%`}
                  initialState={(active) => active}
                  dataStyles={{
                    color: "#fafafa",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "500",
                  }}
                />
              }
            >
              <Contact />
            </Suspense>
          </Route>
          <Route path="*">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
