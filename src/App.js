import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import AboutView from "./views/AboutView";
// import LeadershipView from "./views/LeadershipView";
import GuidelinesView from "./views/GuidelinesView";
import Rush from "./views/Rush";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/about"
            component={AboutView}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/rush"
            component={Rush}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/guidelines"
            component={GuidelinesView}
            layout={LayoutDefault}
          />
          {/* <AppRoute
            exact
            path="/leadership"
            component={LeadershipView}
            layout={LayoutDefault}
          /> */}
        </Switch>
      )}
    />
  );
};

export default App;
