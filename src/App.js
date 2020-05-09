import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import StudentPage from './pages/StudentPage';
import { authenticationCheck } from './actions/authenticationActions';
import UniversitiesPage from './pages/UniversitiesPage';
import Spinner from './components/atoms/Spinner/Spinner';
import StudentInfoPage from './pages/StudentInfoPage';

const App = ({ authenticationCheck, isLoggedIn, userInfo, isLoading }) => {
  useEffect(() => {
    authenticationCheck();
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Route path={'/student/:id'} component={StudentPage} />
              {isLoggedIn ? (
                <>
                  {userInfo && userInfo.admin ? (
                    <Route path={'/'} component={UniversitiesPage} />
                  ) : (
                    <>
                      <Route path={'/'} component={StudentInfoPage} />
                    </>
                  )}
                </>
              ) : (
                <>
                  <Route exact path={'/'} component={LandingPage} />
                  <Route path={'/login'} component={LoginPage} />
                </>
              )}
            </>
          )}
        </Switch>
      </Layout>
    </Router>
  );
};

const mapStateToProps = ({ authenticationReducer: { isLoggedIn, userInfo, isLoading } }) => {
  return { isLoggedIn, userInfo, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticationCheck: () => dispatch(authenticationCheck())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
