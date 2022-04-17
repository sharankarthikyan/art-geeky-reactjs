import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import CategoriesPage from "./pages/categories/categories.component";
import WritePage from "./pages/write/write.component";
import ExplorePage from "./pages/explore/explore.component";

import "./App.css";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

const App = () => {
  return (
    <div>
      <Header />
      <div class="render-page-container">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/write" component={WritePage} />
          <Route path="/explore" component={ExplorePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
