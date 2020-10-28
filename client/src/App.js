import React, { Component } from 'react';
import Layout from '../src/container'
import Home from '../src/views/Home'
import Login from '../src/views/Login'
import Tables from '../src/views/Tables'
import { Provider } from 'react-redux';
import configureStore from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Layout>  <Home /></Layout>
            </Route>

            <Route exact path="/tables">
              <Layout><Tables /></Layout>
            </Route>

            <Route exact path="/messages">
              <Layout><Tables /></Layout>
            </Route>

            <Route path="/">
              <Layout page='login'> <Login /> </Layout>
            </Route>

          </Switch>

        </Router>
      </Provider>
    );

  }
}

export default App;
