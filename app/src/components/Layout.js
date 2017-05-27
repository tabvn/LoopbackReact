import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Layout extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const props = this.props;

    console.log(props);


    return (

      <div className="app-container">
        <header>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/home">Posts</a></li>
            <li><a href="/account">{props.user.email}</a></li>
          </ul>
        </header>
        <div className="app-content">{props.children}</div>
        <footer>

        </footer>
      </div>
    )
  }
};

exports.Layout = Layout;

