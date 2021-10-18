
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          {/* <Route path="/register">
            <Register />
          </Route> */}

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
