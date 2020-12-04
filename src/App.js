import './App.css';
import Container from 'react-bootstrap/Container';
import Heading from "./Heading";
import Navigation from "./Navigation";
import Body from "./Body.js";


function App() {
  return (
    <Container>
      < Navigation />
      < Heading />
      <Body />
    </Container>
  );
}

export default App;
