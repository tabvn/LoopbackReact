import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Layout extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const props = this.props;

    return (

      <div className="app-container">
        <header>
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
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

