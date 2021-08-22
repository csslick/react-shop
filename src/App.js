/* eslint-disable */
import { useState } from 'react';
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import "./App.css";
import { Data } from './data';
import { Link, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Detail from './components/Detail';

function App() {

  const [items, setItems] = useState(Data);
  console.log(Data);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Headphone Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#product">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="title">
        <Container>
          <h2>Shop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim esse id distinctio quaerat illo facilis error possimus, dolore quasi ducimus sunt vero maiores itaque sit cumque temporibus saepe. Eius?</p>
          <Button variant="primary">Primary</Button>
        </Container>  
      </section>

      <Switch>
        <Route path="/" exact componet={Main}>
          <Main data={Data} />
        </Route>
        <Route path="/detail/:id">
          <Detail data={Data} />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
