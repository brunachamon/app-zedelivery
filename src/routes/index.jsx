import React, { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Paths } from '../utils/constants'
import Loader from '../components/Loader'

const Home = lazy(() => import('../pages/Home/index.jsx'))
const ProductsList = lazy(() => import('../pages/Products/List/index.jsx'))

const Routes = props => {
  return (
    <Suspense fallback={<Loader />}>
      <Route exact path={Paths.root}>
        <Redirect to={Paths.home} {...props} />
      </Route>

      <Route
        exact
        path={Paths.home}
        component={Home}
        {...props} />

      <Route
        exact
        path={`${Paths.products}/${Paths.list}`}
        component={ProductsList}
        {...props} />
    </Suspense>
  )
}

export default Routes
