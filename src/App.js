import './App.css';
import Container from 'react-bootstrap/Container';
import Heading from "./Heading";
import Navigation from "./Navigation";
import Body from "./Body.js";
import Coding from "./Coding.js";


function App() {
  return (
    <Container>
      < Navigation />
      < Heading />
      <Body />
      <Coding />
    </Container>
  );
}

export default App;
