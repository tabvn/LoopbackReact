import path from 'path';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './components/App';

const app = require('../../server/server');

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(app.loopback.static(path.join(__dirname, 'static')));


const routes = [
  '/',
  '/about',
  '/news',
  '/post/:id',
  '/login'
];

var renderService = function (path) {


  app.get(path, (req, res) => {
    let markup = '';
    let status = 200;

    if (process.env.UNIVERSAL) {
      const context = {};
      markup = renderToStaticMarkup(
        <CookiesProvider cookies={req.universalCookies}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </CookiesProvider>,
      );

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        return res.redirect(302, context.url);
      }

      if (context.is404) {
        status = 404;
      }
    }

    return res.status(status).render('index', {title: "My app", markup: markup});
  });


};


for (let route of routes) {

  renderService(route);
}
app.start();
