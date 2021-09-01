import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import HomePage from './pages/home/home.component';
import CatogoriesPage from './pages/catogories/catogories.component';
import WritePage from './pages/write/write.component';

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
          <Route path="/catogories" component={CatogoriesPage} />
          <Route path="/write" component={WritePage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
