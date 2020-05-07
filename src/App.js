import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          {isLogged ? (
            <>
              {isStudent ? (
                <Route path={'/student/:id'} component={LandingPage} />
              ) : (
                <>
                  <Route path={'/:universityID'} component={LandingPage} />
                </>
              )}
            </>
          ) : (
            <Route path={'/login'} component={AuthPage} />
          )}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
