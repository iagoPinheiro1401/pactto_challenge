import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "@/theme"
import { useRouter } from "next/router"

import Menu from "@/components/menu/Menu"

import { MenuProvider } from "@/contexts/MenuContext"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background-color: ${props => props.theme.colors.primary};
    }
`

function App({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MenuProvider>
      <div style={{ display: 'flex' }}>
        <Menu />
          <Component {...pageProps} />
      </div>
    </MenuProvider>
  </ThemeProvider>
  )
}

export default App