import { React } from 'react'
import GlobalStyles from "../../fonts/fonts"
import { AppRoutes } from '../../routes'
import { Fragment } from 'react'



const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <AppRoutes />
    </Fragment>
  )
}

export default App
