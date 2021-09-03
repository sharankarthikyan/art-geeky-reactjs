import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import HomePage from './pages/home/home.component';
import CatogoriesPage from './pages/catogories/catogories.component';
import WritePage from './pages/write/write.component';
import ExplorePage from './pages/explore/explore.component';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { useEffect, useState } from 'react';

const App = () => {
  const [welcome, setWelcome] = useState('');

  useEffect(() => {
    axios
      .get('/api/users')
      .then(function (response) {
        console.log('SUCC');
        console.log(response.data.h1);
        setWelcome(response.data.h1);
      })
      .catch(function (error) {
        console.log('ERROR');
        console.log(error);
      }, []);
  });
  return (
    <div>
      <Header />
      <Container>
        {welcome}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catogories" component={CatogoriesPage} />
          <Route path="/write" component={WritePage} />

          <Route path="/explore" component={ExplorePage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
