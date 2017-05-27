import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from './Layout';
import {NotFoundComponent} from './notfound/notfound.component';
import Home from './home/home.component';
import Post from './post/post.component';



class App extends React.Component{


  constructor(props){

    super(props);


  }
  render(){

    console.log("App: ", this.props);

    return (

      <Layout user={{email: "toan@tabvn.com"}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post/:id" component={Post}/>
          <Route component={NotFoundComponent}/>
        </Switch>
      </Layout>
    );

  }
}


export default App;
