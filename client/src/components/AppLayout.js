import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {IndexLinkContainer} from 'react-router-bootstrap'
import {Layout, Header, HeaderRow, Textfield, Drawer, Navigation, Content, Button, Card, CardText} from 'react-mdl';

class AppLayout extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const props = this.props;

    return (


      <div className="app-wrapper">
        <Layout>
          <Header title={<span className="app-title"><Link to="/">App</Link></span>} scroll>
            <Navigation>
              <NavLink to="/">Home</NavLink>
             <NavLink to="/login">Login</NavLink>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Sign Out</NavLink>
            </Navigation>
          </Drawer>
          <Content><div className="page-content">{props.children}</div></Content>
        </Layout>
      </div>
    )
  }
};

exports.AppLayout = AppLayout;

