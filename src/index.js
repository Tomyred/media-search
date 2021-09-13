import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './containers/List'

import 'bootswatch/dist/lux/bootstrap.min.css'

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark ">
        <a href="/" className="navbar-brand bg-dark">Media finder</a>
      </nav>
      <main>
    <div className="container">
    <List></List>
    </div>
    </main>
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);