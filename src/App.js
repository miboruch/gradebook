import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Input from './components/atoms/Input/Input';
import AuthPage from './pages/AuthPage';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Router>
      <Layout>
        <Switch>
          {!isLogged && (
            <>
              <Route path={'/login'} component={AuthPage} />
              <Route
                path={'/register'}
                render={(props) => <AuthPage {...props} isRegister={true} />}
              />
            </>
          )}
        </Switch>
        <Input />
      </Layout>
    </Router>
  );
}

export default App;
