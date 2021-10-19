
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';
import Servicing from './pages/Servicing/Servicing';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './pages/Shared/Register/PrivateRoute/PrivateRoute';
import SignIn from './pages/Shared/Register/SignIn/SignIn';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/serviceInfo">
              <ServiceInfo />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/signin">
              <SignIn />
            </Route>

            <PrivateRoute exact path="/servicing/:id">
              <Servicing />
            </PrivateRoute>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
