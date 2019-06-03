import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './Profile/ProfileDetails/Profile';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
             <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
 
export default App;