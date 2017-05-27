import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AppLayout} from './AppLayout';
import {NotFoundComponent} from './notfound/notfound.component';
import Home from './home/home.component';
import Post from './post/post.component';
import LoginComponent from './login/login.component';
import 'react-mdl/extra/material.js'

class App extends React.Component {


  constructor(props) {

    super(props);

  }
  render() {

    return (
      <AppLayout user={{email: "toan@tabvn.com"}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginComponent}/>
          <Route exact path="/post/:id" component={Post}/>
          <Route component={NotFoundComponent}/>
        </Switch>
      </AppLayout>
    );

  }
}

export default App;
