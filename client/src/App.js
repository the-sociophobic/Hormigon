import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Helmet from './components/Helmet'
import ScrollToTop from './components/def/ScrollToTop'
import Layout from './components/Layout'

import { store, Context } from './store'

import routes from './routes'

import './styles/index.sass'

const history = createBrowserHistory()


export default () => (
  <Router history={history}>
    <Context.Provider value={{store: new store()}}>
      <Helmet />
      <ScrollToTop/>
      <Switch>
        <Layout>
          {routes.map(route =>
            <Route {...route} />
          )}
        </Layout>
      </Switch>
    </Context.Provider>
  </Router >
)
