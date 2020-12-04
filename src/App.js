import './App.css';
import Container from 'react-bootstrap/Container';
import Heading from "./Heading";
import Navbar from "./Navbar";
import Body from "./Body.js";


function App() {
  return (
    <Container>
      < Navbar />
      < Heading />
      <Body />
    </Container>
  );
}

export default App;
