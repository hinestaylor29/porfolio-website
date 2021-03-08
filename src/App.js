import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from "./Navigation";
import Heading from "./Heading";
import Body from "./Body";
import Resume from "./Resume";
import Coding from "./Coding";
import Contact from "./Contact";
import Avidplay from './Avidplay';
import Hackathons from './Hackathons';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Avidplay" component={Avidplay}/>
      </Switch>
      </ScrollToTop>
    </Router>
  );
}

const Home = () => (
  <Container className="flex">
      < Navigation />
      < Heading />
      <Body />
      <Resume />
      <Coding />
      <Hackathons />
      <Contact />
    </Container>
);

export default App;
