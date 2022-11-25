import { ChakraProvider } from "@chakra-ui/react";

import logo from "./logo.svg";
import "./App.css";
import theme from "./components/ui/Theme";
import MainDrawer from "./components/layout/MainDrawer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainDrawer />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
