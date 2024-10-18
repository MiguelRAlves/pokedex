import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './pages/routes'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { ThemeProvider } from './contexts/theme-toggler'

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Flexo Medium', sans-serif;
  }

  a {
    color: #000;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: #ccc;
  }

  button:hover {
    border-color: #646cff;
    background-color: gray;
  }

  button:focus, button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

`

export default App
