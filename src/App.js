import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from "./Navigation";
import Heading from "./Heading";
import Body from "./Body";
import Resume from "./Resume";
import Coding from "./Coding";
import Contact from "./Contact";


function App() {
  return (
    <Container>
      < Navigation />
      < Heading />
      <Body />
      <Resume />
      <Coding />
      < Contact />
    </Container>
  );
}

export default App;
