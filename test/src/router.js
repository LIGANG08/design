/**
 * 2017-11.27 ligang
 */

import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import Products from './routes/Products'; // 加
import BasicLayout from './layouts/BasicLayout'; // 加
// import about from './layouts/test';
// import test from './layouts/test'; // 加

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={Products} /> */}
        <Route path="/" exact component={BasicLayout} />
        {/* <Route path="/" exact component={test} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
