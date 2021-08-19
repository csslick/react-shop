/* eslint-disable */
import { useState } from 'react';
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import "./App.css";
import { Data } from './data';

function App() {

  const [items, setItems] = useState(Data);
  console.log(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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

      <section id="product" className="container product">
        <Items data={items} />
      </section>
      
    </div>
  );
}

function Items({data}) {

  return (
    <div className="row">
      {
        data.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <img src={item.image} width="100%" />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>{item.price.toLocaleString()}원</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
