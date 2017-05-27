import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import { CookiesProvider } from 'react-cookie';

class Main extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    return (
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    );
  }


}


window.onload = () => {
  render(<Main />, document.getElementById('main'));
};

