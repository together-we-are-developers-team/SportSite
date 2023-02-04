import { React } from 'react'
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from './styles'
import { AppRoutes } from '../../routes'

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
    <StyledApp>
      <GlobalStyle />
      <AppRoutes />
    </StyledApp>
  )
}

export default App
