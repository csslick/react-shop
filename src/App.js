/* eslint-disable */
import { useState, createContext } from 'react';
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import "./App.css";
import { Data } from './data';
import { Link, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Detail from './components/Detail';
// import StockContextProvider from './context';

// 외부의 하위 콤퍼넌트에서 context를 전달하기 위해 export 함
export const StockContext = createContext();

function App() {

  const [items, setItems] = useState(Data);
  const [stock, setStock] = useState([33, 55, 99]);
  // console.log(Data);
  // 재고 변경
  const changeStock = (id) => {
    console.log('재고변경');
    let newArr = [...stock];
    newArr[id] = newArr[id] - 1;
    setStock(newArr);
    console.log(newArr);
    // console.log(id, stock[id]);
  }

  // 더보기 데이터를 가져오는 함수
  function addItem (moreData) {
    let newData = [...Data, ...moreData];
    setItems(newData);
    console.log(newData);
  }

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

      <StockContext.Provider value={{stock, changeStock}}>
        <Switch>
          <Route path="/" exact componet={Main}>
              <Main data={items} addItem={addItem}/>
          </Route>
          <Route path="/detail/:id">
              <Detail data={items} />
          </Route>
        </Switch>
      </StockContext.Provider>
    </div>
  );
}

export default App;
