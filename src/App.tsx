// import 'ses';
import logo from "./logo.svg";
import "./App.css";
// import styled from "styled-components";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
`;
const StyledP = styled.p`
  color: white;
`;

function App() {
  return (
    <StyledDiv className="App">
      <header className="App-header">
        <StyledP>This is my styled paragraph</StyledP>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </StyledDiv>
  );
}

export default App;
