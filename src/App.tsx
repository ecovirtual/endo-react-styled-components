import "@endo/init";
// import 'ses';
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`;

function App() {
  return (
    <StyledDiv className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </StyledDiv>
  );
}

export default App;
