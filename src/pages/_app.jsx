import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "@/theme"

import Menu from "@/components/menu/Menu"
import Container from "@/components/container/Container"

import { MenuProvider } from "@/contexts/MenuContext"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.colors.primary};
        overflow-x: hidden;
        margin: 0;
    }
`

function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MenuProvider>
      <div style={{ display: 'flex' }}>
        <Menu />
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </MenuProvider>
  </ThemeProvider>
  )
}

export default App