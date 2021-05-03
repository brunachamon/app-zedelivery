import { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Paths } from '../utils/constants'
import Loader from '../components/Loader'

const Home = lazy(() => import('../pages/Home'))
const ProductsList = lazy(() => import('../pages/Products/List'))

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

      {/* <Route
        render={() => <Redirect to={Paths.login} />}
      /> */}
    </Suspense>
  )
}

export default Routes
