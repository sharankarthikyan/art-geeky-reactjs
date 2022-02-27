import React from "react";
import { Route, Switch } from 'react-router-dom';
import Container from '@mui/material/Container';

import HomePage from './pages/home/home.component';
import CategoriesPage from './pages/categories/categories.component';
import WritePage from './pages/write/write.component';
import ExplorePage from './pages/explore/explore.component';
import ProfilePage from './pages/profilepage/profilepage.component';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/write" component={WritePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/:id" component={ProfilePage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
