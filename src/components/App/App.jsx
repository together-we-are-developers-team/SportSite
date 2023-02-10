import { React } from 'react'
import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from '../../routes'
import { Fragment } from 'react'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a{
  textDecoration: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
 
}
`

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  )
}

export default App
